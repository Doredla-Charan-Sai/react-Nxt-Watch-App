import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  background-color: '#f9f9f9';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-family: 'Roboto';
  height: 120vh;
`

export const NotFoundImg = styled.img`
  height: 350px;
`
export const NotFoundTitle = styled.h1`
  font-size: 30px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`
export const NotFoundDescription = styled.p`
  font-size: 17px;
  color: ${props => (props.isDark ? '#d7dfe9' : '#606060')};
`
