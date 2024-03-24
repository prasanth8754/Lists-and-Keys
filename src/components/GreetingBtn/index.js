import {BtnCont, Button} from './styledComponents'

const GreetingBtn = props => {
  const {langDetails, activeTabId, onChangeLaguage} = props
  const {id, buttonText} = langDetails

  const changeLang = () => {
    onChangeLaguage(id)
  }

  const isActiveBtn = id === activeTabId ? 'active' : ''

  return (
    <BtnCont>
      <Button isActive={isActiveBtn} type="button" onClick={changeLang}>
        {buttonText}
      </Button>
    </BtnCont>
  )
}

export default GreetingBtn
