import styled from 'styled-components'

export const LoginDiv = styled.div`
  display: flex;
  font-display: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDark ? '#1e293b' : 'white')};
  height: 100vh;
`
export const FormDiv = styled.div`
  border-radius: 10px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : 'white')};
  box-shadow: ${props =>
    props.isDark ? '#0f0f0f' : '5px 5px 5px 5px #1f1f1f'};
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 30%;
`
export const WebsiteLogo = styled.img`
  width: 160px;
  height: 40px;
  align-self: center;
  margin-bottom: 10px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
`
export const Input = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: ${props => (props.isDark ? '1px solid white' : '1px solid black')};
  cursor: pointer;
  color: ${props => (props.isDark ? 'white' : 'black')};
  padding: 5px;
`
export const CheckRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const CheckBox = styled.input`
  margin: 0;
  align-self: flex-start;
  cursor: pointer;
  margin-right: 5px;
`
export const LogInBtn = styled.button`
  height: 30px;
  width: 100%;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
`
export const ErrorText = styled.p`
  color: red;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 10px;
`
