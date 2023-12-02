import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavDiv = styled.div`
  width: 200px;
  height: 87vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
`
export const RoutingList = styled.ul`
  margin-top: 30px;
  padding: 0px;
  list-style-type: none;
`
export const LinkCard = styled(Link)`
  text-decoration: none;
`
export const RouteItem = styled.li`
  height: 50px;
  padding: 10px;
  background-color: ${props => (props.isActive ? '#e2e8f0' : 'transparent')};
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const RouteText = styled.p`
  margin-left: 15px;
  color: ${props => (props.isActive ? 'black' : 'grey')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 18px;
`
export const NavigationContactInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: transparent;
`
export const ContactTitle = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 22px;
`
export const SocialMediaIconsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`
export const ImageCard = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const Description = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
`
