import styled from 'styled-components'

export const SavedVideoDiv = styled.div`
  background-color: ${props => (props.isDark ? '#383838' : '#f8fafc')};
`
export const SavedHeader = styled.div`
  background-color: ${props => (props.isDark ? '#424242' : '#e2e8f0')};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`
export const VideosSavedUl = styled.ul`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f8fafc')};
  list-style-type: none;
  margin: 0;
  padding: 20px;
`
export const VideoItem = styled.li`
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`
export const VideoDetailsDiv = styled.div`
  padding-left: 10px;
  width: 100%;
`
export const SavedImgDiv = styled.div`
  background-color: ${props => (props.isDark ? '#383838' : '#f8fafc')};
  padding: 10px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`
export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f8fafc')};
  overflow-y: scroll;
  height: 87vh;
  width: 80vw;
`
