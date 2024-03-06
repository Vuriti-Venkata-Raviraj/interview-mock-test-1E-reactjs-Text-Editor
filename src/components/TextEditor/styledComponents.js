import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #25262c;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  height: 90%;
  width: 90%;
  background-color: #1b1c22;
  display: flex;
`

export const LeftSubContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const MainHeader = styled.h1`
  color: #f8fafc;
  font-size: 28px;
  font-family: Roboto;
`
export const TextLogo = styled.img`
  height: 70%;
  width: 80%;
`

export const TextContainer = styled.div`
  width: 55%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ToolContainer = styled.ul`
  background-color: #25262c;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid #cbd5e1;
  margin: 0px;
  min-height: 12%;
  display: flex;
  align-items: center;
`

export const ListItems = styled.li`
  list-style: none;
  padding: none;
  margin: none;
`

export const FontLogosBtn = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  color: ${props => (props.isSelected ? '#faff00' : '#f1f5f9')};
  margin-left: 20px;
`

export const TextAreaElement = styled.textarea`
  height: 88%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid #cbd5e1;
  background-color: #25262c;
  outline: none;
  color: #f1f5f9;
  padding: 10px;
  font-family: Roboto;
  font-size: 17px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderlined ? 'underline' : 'normal')};
`
