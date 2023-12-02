import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoginDiv,
  FormDiv,
  WebsiteLogo,
  Form,
  Label,
  Input,
  LogInBtn,
  ErrorText,
  CheckBox,
  CheckRow,
} from './styledComponents'

class Login extends Component {
  state = {
    logedIn: false,
    username: '',
    password: '',
    isChecked: false,
    errorTxt: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = event => {
    this.setState({isChecked: event.target.checked})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const loginUrl = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      this.setState({logedIn: true})
      history.replace('/')
    } else {
      this.setState({errorTxt: data.error_msg})
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    const {logedIn, username, password, isChecked, errorTxt} = this.state
    console.log(logedIn)
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginDiv isDark={isDark}>
              <FormDiv isDark={isDark}>
                <WebsiteLogo
                  src={
                    isDark === false
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />
                <Form onSubmit={this.onFormSubmit}>
                  <Label htmlFor="username" isDark={isDark}>
                    USERNAME
                  </Label>
                  <Input
                    isDark={isDark}
                    id="username"
                    type="text"
                    value={username}
                    onChange={this.onChangeUsername}
                    placeholder="Username"
                  />
                  <Label isDark={isDark} htmlFor="password">
                    PASSWORD
                  </Label>
                  <Input
                    type={isChecked ? 'text' : 'password'}
                    isDark={isDark}
                    id="password"
                    value={password}
                    onChange={this.onChangePassword}
                    placeholder="Password"
                  />
                  <CheckRow>
                    <CheckBox
                      id="showPassword"
                      type="checkbox"
                      checked={isChecked}
                      onChange={this.onShowPassword}
                      isDark={isDark}
                    />
                    <Label htmlFor="showPassword" isDark={isDark}>
                      Show Password
                    </Label>
                  </CheckRow>
                  <LogInBtn type="submit">Login</LogInBtn>
                  {errorTxt !== '' ? <ErrorText>*{errorTxt}</ErrorText> : null}
                </Form>
              </FormDiv>
            </LoginDiv>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Login
