import styled from 'styled-components'

export const VideoDiv = styled.div`
  padding: 30px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f8fafc')};
`
export const LikesSavedDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const FunctionalIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 20%;
`
export const LikeButton = styled.button`
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
export const SaveButton = styled(LikeButton)`
  color: ${props => (props.save ? '#2563eb' : '#64748b')};
`
export const DisLikeButton = styled(LikeButton)`
  color: ${props => (props.dislike ? '#2563eb' : '#64748b')};
`
export const HorizontalLine = styled.hr`
  color: ${props => (props.isDark ? 'white' : 'black')};
`
