import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Header from '../Header'
import LoaderView from '../LoaderView'
import NavigationBar from '../NavigationBar'
import {
  SavedVideoDiv,
  SavedHeader,
  VideoDetailsDiv,
  SavedImgDiv,
  ColumnDiv,
} from '../SavedVideos/styledComponents'
import {
  FailureDiv,
  FailureImg,
  FailureText,
  FailurePara,
  LinkCard,
  Thumbnail,
  HomeDiv,
  HomeRowDiv,
  Title,
  Name,
  RetryBtn,
} from '../Home/styledComponents'
import {VideoItem, VideosSavedUl, Head} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Gaming extends Component {
  state = {
    getVideosStatus: apiStatusConstants.initial,
    gamingList: [],
  }

  componentDidMount() {
    this.getVideosListApi()
  }

  getVideosListApi = async () => {
    this.setState({getVideosStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const videosUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videosUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = data.videos.map(eachVideo => ({
        ...eachVideo,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingList: formattedData,
        getVideosStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({getVideosStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => this.getVideosListApi()

  renderCasesForVideos = () => {
    const {getVideosStatus} = this.state
    switch (getVideosStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderTrendingFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  renderLoaderView = () => <LoaderView />

  renderTrendingFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FailureDiv>
            <FailureImg
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureText isDark={isDark}>
              Oops! Something Went Wrong
            </FailureText>
            <FailurePara isDark={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <RetryBtn type="button" onClick={this.onClickRetry}>
              Retry
            </RetryBtn>
          </FailureDiv>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const {gamingList} = this.state
        return (
          <SavedVideoDiv isDark={isDark}>
            <SavedHeader isDark={isDark}>
              <SavedImgDiv isDark={isDark}>
                <SiYoutubegaming size="30px" fill="red" />
              </SavedImgDiv>
              <Head isDark={isDark}>Gaming</Head>
            </SavedHeader>
            <VideosSavedUl isDark={isDark}>
              {gamingList.map(eachVideo => (
                <VideoItem key={eachVideo.id}>
                  <LinkCard to={`/videos/${eachVideo.id}`}>
                    <Thumbnail
                      style={{width: '270px'}}
                      src={eachVideo.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <VideoDetailsDiv>
                      <Title isDark={isDark}>{eachVideo.title}</Title>
                      <Name>{eachVideo.viewCount} Watching Worldwide</Name>
                    </VideoDetailsDiv>
                  </LinkCard>
                </VideoItem>
              ))}
            </VideosSavedUl>
          </SavedVideoDiv>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <HomeDiv>
              <Header />
              <HomeRowDiv>
                <NavigationBar />
                <ColumnDiv isDark={isDark} data-testid="gaming">
                  {this.renderCasesForVideos()}
                </ColumnDiv>
              </HomeRowDiv>
            </HomeDiv>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Gaming
