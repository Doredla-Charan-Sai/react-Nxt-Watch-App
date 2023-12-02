import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import NxtWatchContext from './context/NxtWatchContext'
import Login from './components/Login'
import Home from './components/Home'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  state = {isDark: false, savedVideosList: [], activeRoute: 'home'}

  changeTheme = value => {
    this.setState({isDark: !value})
  }

  changeActiveRoute = value => {
    this.setState({activeRoute: value})
  }

  onSaveVideo = value => {
    const {savedVideosList} = this.state
    const similarVideos = savedVideosList.find(
      eachVideo => eachVideo.id === value.id,
    )

    if (similarVideos) {
      this.setState(prevState => ({
        savedVideosList: prevState.savedVideosList.filter(
          eachVideo => eachVideo.id !== value.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, value],
      }))
    }
  }

  render() {
    const {isDark, savedVideosList, activeRoute} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          savedVideosList,
          onSaveVideo: this.onSaveVideo,
          activeRoute,
          changeActiveRoute: this.changeActiveRoute,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
