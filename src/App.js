import {Component} from 'react'
import GreetingBtn from './components/GreetingBtn'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    langItem: languageGreetingsList[0],
    activeTabId: languageGreetingsList[0].id,
  }

  onChangeLaguage = id => {
    const filteredLang = languageGreetingsList.filter(
      eachItem => eachItem.id === id,
    )[0]

    this.setState({langItem: filteredLang, activeTabId: filteredLang.id})
  }

  render() {
    const {activeTabId, langItem} = this.state
    const {imageUrl, imageAltText} = langItem

    return (
      <div className="bg-cont">
        <h1 className="main-h1">Multilingual Greetings</h1>
        <ul className="ul-cont">
          {languageGreetingsList.map(eachItem => (
            <GreetingBtn
              langDetails={eachItem}
              key={eachItem.id}
              onChangeLaguage={this.onChangeLaguage}
              activeTabId={activeTabId}
            />
          ))}
        </ul>
        <img className="img" src={imageUrl} alt={imageAltText} />
      </div>
    )
  }
}

export default App
