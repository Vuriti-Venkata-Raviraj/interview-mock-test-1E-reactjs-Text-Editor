import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  Card,
  LeftSubContainer,
  MainHeader,
  TextLogo,
  TextContainer,
  ToolContainer,
  FontLogosBtn,
  TextAreaElement,
  ListItems,
} from './styledComponents'

class TextEditor extends Component {
  state = {text: '', isBold: false, isItalic: false, isUnderlined: false}

  onTextChange = event => {
    this.setState({text: event.target.value})
  }

  onBoldChange = () => {
    this.setState(prev => ({isBold: !prev.isBold}))
  }

  onItalicChange = () => {
    this.setState(prev => ({isItalic: !prev.isItalic}))
  }

  onUnderlineChange = () => {
    this.setState(prev => ({isUnderlined: !prev.isUnderlined}))
  }

  render() {
    const {isBold, isItalic, isUnderlined, text} = this.state
    return (
      <MainContainer>
        <Card>
          <LeftSubContainer>
            <MainHeader>Text Editor</MainHeader>
            <TextLogo
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftSubContainer>
          <TextContainer>
            <ToolContainer>
              <ListItems>
                <FontLogosBtn
                  type="button"
                  onClick={this.onBoldChange}
                  isSelected={isBold}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </FontLogosBtn>
              </ListItems>
              <ListItems>
                <FontLogosBtn
                  type="button"
                  onClick={this.onItalicChange}
                  isSelected={isItalic}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </FontLogosBtn>
              </ListItems>
              <ListItems>
                <FontLogosBtn
                  type="button"
                  onClick={this.onUnderlineChange}
                  isSelected={isUnderlined}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </FontLogosBtn>
              </ListItems>
            </ToolContainer>
            <TextAreaElement
              isBold={isBold}
              isItalic={isItalic}
              isUnderlined={isUnderlined}
              value={text}
              onChange={this.onTextChange}
            />
          </TextContainer>
        </Card>
      </MainContainer>
    )
  }
}

export default TextEditor
