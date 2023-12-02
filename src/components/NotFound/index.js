import {ColumnDiv, HomeDiv, HomeRowDiv} from '../Home/styledComponents'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundTitle,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <HomeDiv>
          <Header />
          <HomeRowDiv>
            <NavigationBar />
            <ColumnDiv isDark={isDark}>
              <NotFoundContainer isDark={isDark}>
                <NotFoundImg
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                  alt="not found"
                />
                <NotFoundTitle isDark={isDark}>Page Not Found</NotFoundTitle>
                <NotFoundDescription isDark={isDark}>
                  we are sorry, the page you requested could not be found.
                </NotFoundDescription>
              </NotFoundContainer>
            </ColumnDiv>
          </HomeRowDiv>
        </HomeDiv>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default NotFound
