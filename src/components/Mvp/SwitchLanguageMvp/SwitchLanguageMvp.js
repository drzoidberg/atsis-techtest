import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import * as i18n from './i18n'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { useLanguage } from '../../../context/lang-context'

function SwitchLanguageMvp() {
  const [LSLang, setLSLang] = useLocalStorage('BBAppLang')
  const [, setLang] = useLanguage()

  function applyLang(lng) {
    setLSLang(lng)
    setLang(lng)
  }

  return (
    <Container fluid className='position-fixed top-0 d-flex justify-content-center my-1 w-100'>
      <Button className='me-2' variant='light' onClick={() => applyLang('Es')}>
        🇪🇸 {i18n[`uiTexts${LSLang}`].spanishLang}
      </Button>
      <Button variant='light' onClick={() => applyLang('En')}>
        🇬🇧 {i18n[`uiTexts${LSLang}`].englishLang}
      </Button>
    </Container>
  )
}

export default SwitchLanguageMvp
