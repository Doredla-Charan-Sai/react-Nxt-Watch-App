import styled from 'styled-components'

export const BannerSectionPart = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 30px;
  height: 40%;
  width: 80vw;
  display: ${props => (props.close ? 'none' : null)};
`
export const LogoCloseDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const WebsiteLogo = styled.img`
  width: 150px;
  height: 40px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`
export const BannerPara = styled.p`
  display: ${props => (props.close ? 'none' : 'flex')};
  color: black;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
`
export const GetItNowButton = styled.button`
  color: black;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  border: 1px solid black;
  height: 30px;
  background-color: transparent;
`
