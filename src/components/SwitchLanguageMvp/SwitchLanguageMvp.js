import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
// import useLocalStorage from '../../hooks/useLocalStorage'
import uiTextsEn from './i18n/uiTexts.en.json'
import uiTextsEs from './i18n/uiTexts.es.json'

function SwitchLanguageMvp() {
  // const [lang, setLang] = React.useContext()
  return (
    <Container fluid className='position-fixed top-0 d-flex justify-content-center my-1 w-100'>
      <Button className='me-2' variant='light'>
        {/* <Button className='me-2' variant='light' onClick={() => ApplyBbApplicationLang('es')}> */}
        {/* 🇪🇸 {lang === 'en' ? uiTextsEn.spanishLang : uiTextsEs.spanishLang} */}
        {/* this is prepared for accepting  more languages than just 'en' and 'es', although the logic
       implemented here is simpler since the goal is to contemplate only two languages */}
      </Button>
      {/* <Button variant='light'> */}
      {/* <Button variant='light'>🇬🇧 {lang === 'en' ? uiTextsEn.englishLang : uiTextsEs.englishLang}</Button> */}
    </Container>
  )
}

export default SwitchLanguageMvp
