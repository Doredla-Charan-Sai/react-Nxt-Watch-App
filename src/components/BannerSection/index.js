import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {
  BannerSectionPart,
  LogoCloseDiv,
  WebsiteLogo,
  CloseButton,
  BannerPara,
  GetItNowButton,
} from './styledComponents'

class BannerSection extends Component {
  state = {close: false}

  onClickClose = () => {
    this.setState({close: true})
  }

  render() {
    const {close} = this.state
    return (
      <BannerSectionPart close={close} data-testid="banner">
        <LogoCloseDiv>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <CloseButton
            type="button"
            data-testid="close"
            onClick={this.onClickClose}
          >
            <AiOutlineClose size="25px" />
          </CloseButton>
        </LogoCloseDiv>
        <BannerPara close={close}>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerPara>
        <GetItNowButton>GET IT NOW</GetItNowButton>
      </BannerSectionPart>
    )
  }
}
export default BannerSection
