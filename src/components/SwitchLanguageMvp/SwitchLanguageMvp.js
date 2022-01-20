import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import * as i18n from './i18n'
import useLocalStorage from '../../hooks/useLocalStorage'

function SwitchLanguageMvp() {
  const [LSLang, setLSLang] = useLocalStorage('BBAppLang')

  return (
    <Container fluid className='position-fixed top-0 d-flex justify-content-center my-1 w-100'>
      <Button className='me-2' variant='light' onClick={() => setLSLang('Es')}>
        🇪🇸 {i18n[`uiTexts${LSLang}`].spanishLang}
      </Button>
      <Button variant='light' onClick={() => setLSLang('En')}>
        🇬🇧 {i18n[`uiTexts${LSLang}`].englishLang}
      </Button>
    </Container>
  )
}

export default SwitchLanguageMvp
