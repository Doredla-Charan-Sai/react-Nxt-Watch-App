import styled from 'styled-components'

export const HeaderDiv = styled.div`
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  padding: 15px;
  width: 96vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const WebsiteLogo = styled.img`
  width: 150px;
  height: 40px;
`
export const ThemeProLogoutDiv = styled.div`
  width: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const ThemeButton = styled.button`
  height: 40px;
  width: 40px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
`
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
`
export const LogoutBtn = styled.button`
  background-color: transparent;
  border-radius: 5px;
  height: 35px;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  //   border: ${props =>
    props.isDark ? '1px solid white' : '1px solid black'};
`
export const ConfirmationText = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
`
export const ButtonsCard = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const CancelButton = styled(LogoutBtn)`
  border: 1px solid grey;
  color: grey;
`
export const ConfirmButton = styled(LogoutBtn)`
  background-color: #3b82f6;
  border: none;
  color: white;
  outline: none;
`
