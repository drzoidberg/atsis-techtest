import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import * as i18n from './i18n'
import { useLanguage } from '../../../context/lang-context'

function CharactersList() {
  const [LSLang] = useLanguage()

  return (
    <Container>
      <Row className='d-flex align-items-center vh-100'>
        <Col>
          <h3 className='page-not-found text-center'>
            <strong>Message:</strong> {i18n[`uiTexts${LSLang}`].sampleText}
            <Button as={Link} to='/' className='ms-3'>
              Go Back
            </Button>
          </h3>
        </Col>
      </Row>
    </Container>
  )
}

export default CharactersList
