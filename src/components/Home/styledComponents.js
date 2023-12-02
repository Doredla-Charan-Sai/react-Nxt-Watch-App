import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#181818' : '#f8fafc')};
  height: 100%;
  width: 98vw;
`
export const HomeRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#383838' : '#f8fafc')};
  overflow-y: scroll;
  height: 87vh;
  width: 80vw;
`
export const DownDiv = styled.div`
  padding: 30px;
  background-color: ${props => (props.isDark ? '#383838' : '#f8fafc')};
  width: 80vw;
`
export const SearchCont = styled.div`
  background-color: transparent;
  border: ${props => (props.isDark ? '1px solid #e2e8f0' : '1px solid black')};
  height: 30px;
  width: 35%;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
`
export const SearchInput = styled.input`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  color: ${props => (props.isDark ? '#e2e8f0' : 'black')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 13px;
  width: 80%;
  padding: 5px;
`
export const SearchButton = styled.button`
  border-left: ${props =>
    props.isDark ? '1px solid #e2e8f0' : '1px solid black'};
  background-color: ${props => (props.isDark ? '#383838' : '#e2e8f0')};
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  outline: none;
  width: 20%;
`
export const FailureDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: transparent;
`
export const FailureImg = styled.img`
  height: 50%;
  width: 30%;
`
export const FailureText = styled.h1`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 30px;
`
export const FailurePara = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-family: 'Roboto';
  font-size: 15px;
`
export const RetryBtn = styled.button`
  color: white;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #3b82f6;
  height: 32px;
  width: 120px;
`
export const AllVideoUl = styled.ul`
  margin: 0;
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
export const VideoItem = styled.li`
  width: 22%;
  background-color: transparent;
  margin-top: 13px;
  margin-right: 15px;
  height: 260px;
`
export const Thumbnail = styled.img`
  width: 100%;
`
export const ChannelDetailDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
`
export const ProfileImg = styled.img`
  height: 50px;
  width: 50px;
  padding: 10px;
`
export const TitleNameDiv = styled.div`
  background-color: transparent;
`
export const Title = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
`
export const Name = styled.p`
  color: grey;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
`

export const LinkCard = styled(Link)`
  text-decoration: none;
`
