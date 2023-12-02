import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
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
} from '../Home/styledComponents'
import {
  SavedVideoDiv,
  SavedHeader,
  VideosSavedUl,
  VideoItem,
  VideoDetailsDiv,
  SavedImgDiv,
  ColumnDiv,
} from './styledComponents'
import {Head} from '../Gaming/styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, savedVideosList} = value
      const renderNoSavedVideos = () => (
        <FailureDiv>
          <FailureImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <FailureText isDark={isDark}>No saved videos found</FailureText>
          <FailurePara isDark={isDark}>
            Save your videos by clicking a button
          </FailurePara>
        </FailureDiv>
      )
      const renderSavedVideos = () => (
        <SavedVideoDiv isDark={isDark}>
          <SavedHeader isDark={isDark}>
            <SavedImgDiv isDark={isDark}>
              <MdPlaylistAdd size="30px" fill="red" />
            </SavedImgDiv>
            <Head isDark={isDark}>Saved Videos</Head>
          </SavedHeader>
          <VideosSavedUl isDark={isDark}>
            {savedVideosList.map(eachVideo => (
              <LinkCard to={`/videos/${eachVideo.id}`}>
                <VideoItem key={eachVideo.id}>
                  <Thumbnail
                    style={{width: '270px'}}
                    src={eachVideo.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <VideoDetailsDiv>
                    <Title isDark={isDark}>{eachVideo.title}</Title>
                    <Name>{eachVideo.name}</Name>
                    <Name>
                      {eachVideo.viewCount} Views.{eachVideo.publishedAt} ago
                    </Name>
                  </VideoDetailsDiv>
                </VideoItem>
              </LinkCard>
            ))}
          </VideosSavedUl>
        </SavedVideoDiv>
      )
      return (
        <HomeDiv>
          <Header />
          <HomeRowDiv>
            <NavigationBar />
            <ColumnDiv isDark={isDark} data-testid="savedVideos">
              {savedVideosList.length === 0
                ? renderNoSavedVideos()
                : renderSavedVideos()}
            </ColumnDiv>
          </HomeRowDiv>
        </HomeDiv>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default SavedVideos
