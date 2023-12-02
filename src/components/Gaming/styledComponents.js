import styled from 'styled-components'

export const VideoItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
`
export const VideosSavedUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin: 0;
  list-style-type: none;
  flex-wrap: wrap;
`
export const Head = styled.h1`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 23px;
`
