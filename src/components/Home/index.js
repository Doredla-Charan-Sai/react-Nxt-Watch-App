import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import LoaderView from '../LoaderView'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import BannerSection from '../BannerSection'
import {
  HomeDiv,
  HomeRowDiv,
  ColumnDiv,
  DownDiv,
  SearchCont,
  SearchInput,
  SearchButton,
  FailureDiv,
  FailureImg,
  FailurePara,
  FailureText,
  RetryBtn,
  AllVideoUl,
  VideoItem,
  Thumbnail,
  ChannelDetailDiv,
  ProfileImg,
  TitleNameDiv,
  Title,
  Name,
  LinkCard,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    inputSearchItem: '',
    getVideosStatus: apiStatusConstants.initial,
    allVideosList: [],
  }

  componentDidMount() {
    this.getVideosListApi()
  }

  getVideosListApi = async () => {
    this.setState({getVideosStatus: apiStatusConstants.inProgress})
    const {inputSearchItem} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const videosUrl = `https://apis.ccbp.in/videos/all?search=${inputSearchItem}`
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
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
        publishedAt: formatDistanceToNow(new Date(eachVideo.published_at)),
      }))
      this.setState({
        allVideosList: formattedData,
        getVideosStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({getVideosStatus: apiStatusConstants.failure})
    }
  }

  onTypeInput = event => {
    this.setState({inputSearchItem: event.target.value})
  }

  onClickSearch = () => this.getVideosListApi()

  renderCasesForVideos = () => {
    const {getVideosStatus, allVideosList} = this.state
    switch (getVideosStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        if (allVideosList.length === 0) {
          return this.renderNoVideosView()
        }
        return this.renderSuccessView()
      default:
        return null
    }
  }

  renderLoaderView = () => <LoaderView />

  renderFailureView = () => (
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
            <RetryBtn type="button" onClick={this.onClickSearch}>
              Retry
            </RetryBtn>
          </FailureDiv>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderNoVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FailureDiv>
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureText isDark={isDark}>No Search results found</FailureText>
            <FailurePara isDark={isDark}>
              Try different key words or remove search filter
            </FailurePara>
            <RetryBtn onClick={this.onClickSearch}>Retry</RetryBtn>
          </FailureDiv>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const {allVideosList} = this.state
        return (
          <AllVideoUl>
            {allVideosList.map(eachVideo => (
              <VideoItem key={eachVideo.id}>
                <LinkCard to={`/videos/${eachVideo.id}`}>
                  <Thumbnail
                    src={eachVideo.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <ChannelDetailDiv>
                    <ProfileImg
                      src={eachVideo.profileImageUrl}
                      alt="channel logo"
                    />
                    <TitleNameDiv>
                      <Title isDark={isDark}>{eachVideo.title}</Title>
                      <Name>{eachVideo.name}</Name>
                      <Name>
                        {eachVideo.viewCount} Views.{eachVideo.publishedAt} ago
                      </Name>
                    </TitleNameDiv>
                  </ChannelDetailDiv>
                </LinkCard>
              </VideoItem>
            ))}
          </AllVideoUl>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    const {inputSearchItem} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeDiv isDark={isDark} data-testid="home">
              <Header />
              <HomeRowDiv>
                <NavigationBar />
                <ColumnDiv isDark={isDark}>
                  <BannerSection />
                  <DownDiv isDark={isDark}>
                    <SearchCont isDark={isDark}>
                      <SearchInput
                        isDark={isDark}
                        type="search"
                        onChange={this.onTypeInput}
                        placeholder="search"
                        value={inputSearchItem}
                      />
                      <SearchButton
                        onClick={this.onClickSearch}
                        isDark={isDark}
                        data-testid="searchButton"
                        type="button"
                      >
                        <AiOutlineSearch
                          size="20px"
                          color={isDark ? 'grey' : '#475569'}
                        />
                      </SearchButton>
                    </SearchCont>
                    {this.renderCasesForVideos()}
                  </DownDiv>
                </ColumnDiv>
              </HomeRowDiv>
            </HomeDiv>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Home
