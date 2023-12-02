import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import LoaderView from '../LoaderView'
import {
  ColumnDiv,
  FailureDiv,
  FailureImg,
  FailureText,
  FailurePara,
  RetryBtn,
  HomeDiv,
  HomeRowDiv,
  Title,
  Name,
  TitleNameDiv,
  ChannelDetailDiv,
  ProfileImg,
} from '../Home/styledComponents'
import {
  VideoDiv,
  LikesSavedDiv,
  FunctionalIcons,
  LikeButton,
  SaveButton,
  DisLikeButton,
  HorizontalLine,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoStatus: apiStatusConstants.initial,
    videoDetails: {},
    like: false,
    dislike: false,
    save: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  onClickLike = () => {
    this.setState({like: true, dislike: false})
  }

  onClickDislike = () => {
    this.setState({like: false, dislike: true})
  }

  getVideoItemDetails = async () => {
    this.setState({videoStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const videoUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videoUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = {
        ...data.video_details,
        thumbnailUrl: data.video_details.thumbnail_url,
        videoUrl: data.video_details.video_url,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: formatDistanceToNow(
          new Date(data.video_details.published_at),
        ),
      }
      this.setState({
        videoDetails: formattedData,
        videoStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({videoStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => this.getVideoItemDetails()

  renderCasesForVideo = () => {
    const {videoStatus} = this.state
    switch (videoStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
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
        const {isDark, onSaveVideo, savedVideosList} = value
        const {videoDetails, like, dislike, save} = this.state
        const {
          thumbnailUrl,
          id,
          title,
          description,
          videoUrl,
          profileImageUrl,
          name,
          viewCount,
          publishedAt,
          subscriberCount,
        } = videoDetails
        const isSaved = savedVideosList.find(each => each.id === id)
        const onClickSave = () => {
          this.setState(prevState => ({save: !prevState.save}))
          if (save === false) {
            onSaveVideo({
              thumbnailUrl,
              id,
              title,
              name,
              publishedAt,
              viewCount,
              videoUrl,
            })
          }
        }
        return (
          <VideoDiv data-testid="videoItemDetails" isDark={isDark}>
            <ReactPlayer url={videoUrl} width="100%" />
            <Title isDark={isDark}>{title}</Title>
            <LikesSavedDiv>
              <Name>
                {viewCount} Views.{publishedAt} ago
              </Name>
              <FunctionalIcons>
                <LikeButton onClick={this.onClickLike} like={like}>
                  <BiLike size="25px" /> Like
                </LikeButton>
                <DisLikeButton onClick={this.onClickDislike} dislike={dislike}>
                  <BiDislike size="25px" /> Dislike
                </DisLikeButton>
                <SaveButton onClick={onClickSave} save={isSaved}>
                  <MdPlaylistAdd size="25px" /> {isSaved ? 'Saved' : 'Save'}
                </SaveButton>
              </FunctionalIcons>
            </LikesSavedDiv>
            <HorizontalLine isDark={isDark} />
            <ChannelDetailDiv>
              <ProfileImg src={profileImageUrl} alt="channel logo" />
              <TitleNameDiv>
                <Title isDark={isDark}>{name}</Title>
                <Name>{subscriberCount} Subscribers</Name>
                <Name>{description}</Name>
              </TitleNameDiv>
            </ChannelDetailDiv>
          </VideoDiv>
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
                <ColumnDiv isDark={isDark}>
                  {this.renderCasesForVideo()}
                </ColumnDiv>
              </HomeRowDiv>
            </HomeDiv>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default VideoItemDetails
