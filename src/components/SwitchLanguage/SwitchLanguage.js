import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import * as i18n from './i18n'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useLanguage } from '../../context/lang-context'

function SwitchLanguage() {
  const [LSLang, setLSLang] = useLocalStorage('BBAppLang')
  const [, setLang] = useLanguage()

  function applyLang(lng) {
    setLSLang(lng)
    setLang(lng)
  }

  return (
    <Navbar fixed='top' bg='light'>
      <Container fluid className='d-flex'>
        <Button variant='light' as={Link} to='/'>
          Home
        </Button>
        <div>
          <small className='me-2 text-muted'>i18n: </small>
          <Button className='me-2' variant='light' onClick={() => applyLang('Es')}>
            🇪🇸 {i18n[`uiTexts${LSLang}`].spanishLang}
          </Button>
          <Button variant='light' onClick={() => applyLang('En')}>
            🇬🇧 {i18n[`uiTexts${LSLang}`].englishLang}
          </Button>
        </div>
      </Container>
    </Navbar>

    // <Container fluid className='position-fixed top-0 d-flex justify-content-center my-1 w-100 align-items-center'>
    //   <Row>
    //     <Col>
    //     </Col>
    //   </Row>
    // </Container>
  )
}

export default SwitchLanguage
