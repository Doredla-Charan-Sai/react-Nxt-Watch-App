import {Link, withRouter} from 'react-router-dom'
import {BsBrightnessHigh} from 'react-icons/bs'
import {IoMdMoon} from 'react-icons/io'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HeaderDiv,
  WebsiteLogo,
  ThemeProLogoutDiv,
  ThemeButton,
  ProfileImage,
  LogoutBtn,
  PopupContainer,
  ConfirmationText,
  ButtonsCard,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, changeTheme} = value
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const onChangeTheme = () => {
        changeTheme(isDark)
      }
      return (
        <HeaderDiv isDark={isDark}>
          <Link to="/">
            <WebsiteLogo
              src={
                isDark === false
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <ThemeProLogoutDiv>
            {isDark === false ? (
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onChangeTheme}
              >
                <IoMdMoon size="30px" />
              </ThemeButton>
            ) : (
              <ThemeButton
                type="button"
                onClick={onChangeTheme}
                data-testid="theme"
              >
                <BsBrightnessHigh fill="#ffffff" size="30px" />
              </ThemeButton>
            )}
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              fill="#000000"
              modal
              trigger={<LogoutBtn type="button">Logout</LogoutBtn>}
            >
              {close => (
                <PopupContainer isDark={isDark}>
                  <ConfirmationText isDark={isDark}>
                    Are you sure, you want to logout
                  </ConfirmationText>
                  <ButtonsCard>
                    <CancelButton
                      type="button"
                      onClick={() => close()}
                      isDark={isDark}
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsCard>
                </PopupContainer>
              )}
            </Popup>
          </ThemeProLogoutDiv>
        </HeaderDiv>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default withRouter(Header)
