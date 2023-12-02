import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavDiv,
  RoutingList,
  LinkCard,
  NavigationContactInfoCard,
  ContactTitle,
  SocialMediaIconsCard,
  ImageCard,
  Description,
  RouteItem,
  RouteText,
} from './styledComponents'

const routeItems = {
  home: 'home',
  trending: 'trending',
  gaming: 'gaming',
  saved: 'saved',
}

class NavigationBar extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, activeRoute, changeActiveRoute} = value
          const changeHomeRoute = () => {
            changeActiveRoute(routeItems.home)
          }
          const changeTrendingRoute = () => {
            changeActiveRoute(routeItems.trending)
          }
          const changeGamingRoute = () => {
            changeActiveRoute(routeItems.gaming)
          }
          const changeSavedRoute = () => {
            changeActiveRoute(routeItems.saved)
          }

          return (
            <NavDiv isDark={isDark}>
              <RoutingList>
                <LinkCard to="/">
                  <RouteItem
                    key={routeItems.home}
                    onClick={changeHomeRoute}
                    isActive={activeRoute === routeItems.home}
                  >
                    <AiFillHome
                      size="30px"
                      fill={activeRoute === routeItems.home ? 'red' : '#909090'}
                    />
                    <RouteText isActive={activeRoute === routeItems.home}>
                      Home
                    </RouteText>
                  </RouteItem>
                </LinkCard>
                <LinkCard to="/trending">
                  <RouteItem
                    key={routeItems.trending}
                    onClick={changeTrendingRoute}
                    isActive={activeRoute === routeItems.trending}
                  >
                    <HiFire
                      size="30px"
                      fill={
                        activeRoute === routeItems.trending ? 'red' : '#909090'
                      }
                    />
                    <RouteText isActive={activeRoute === routeItems.trending}>
                      Trending
                    </RouteText>
                  </RouteItem>
                </LinkCard>
                <LinkCard to="/gaming">
                  <RouteItem
                    key={routeItems.gaming}
                    onClick={changeGamingRoute}
                    isActive={activeRoute === routeItems.gaming}
                  >
                    <SiYoutubegaming
                      size="30px"
                      fill={
                        activeRoute === routeItems.gaming ? 'red' : '#909090'
                      }
                    />
                    <RouteText isActive={activeRoute === routeItems.gaming}>
                      Gaming
                    </RouteText>
                  </RouteItem>
                </LinkCard>
                <LinkCard to="/saved-videos">
                  <RouteItem
                    key={routeItems.saved}
                    onClick={changeSavedRoute}
                    isActive={activeRoute === routeItems.saved}
                  >
                    <MdPlaylistAdd
                      size="30px"
                      fill={
                        activeRoute === routeItems.saved ? 'red' : '#909090'
                      }
                    />
                    <RouteText isActive={activeRoute === routeItems.saved}>
                      Saved Videos
                    </RouteText>
                  </RouteItem>
                </LinkCard>
              </RoutingList>
              <NavigationContactInfoCard>
                <ContactTitle isDark={isDark}>CONTACT US</ContactTitle>
                <SocialMediaIconsCard>
                  <ImageCard
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ImageCard
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ImageCard
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaIconsCard>
                <Description isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </Description>
              </NavigationContactInfoCard>
            </NavDiv>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default NavigationBar
