import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import uuidv4 from '../../lib/helpers/generateUuid'
import * as i18n from './i18n'
import useLocalStorage from '../../hooks/useLocalStorage'

// import uiTextsEn from './i18n/uiTexts.en.json'
// import uiTextsEs from './i18n/uiTexts.es.json'
import dataCardsEn from './i18n/dataCards.en.json'
// import dataCardsEs from './i18n/dataCards.es.json'

function Home() {
  const [LSLang] = useLocalStorage('BBAppLang')

  return (
    <Container className='d-flex align-items-center min-vh-100'>
      <div>
        <Row className='mt-5 mt-3'>
          <h1 className='home-title text-center'>{i18n[`uiTexts${LSLang}`].homeTitle}</h1>
        </Row>
        <Row>
          <p className='home-lead text-center'>{i18n[`uiTexts${LSLang}`].homeLead}</p>
        </Row>
        <Row>
          {i18n[`dataCards${LSLang}`].map(dataCard => (
            <Col key={uuidv4()} xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className='mb-3'>
              <Card className='h-100'>
                <Card.Body>
                  <Card.Title as='h5'>{dataCard.title}</Card.Title>
                  <Card.Text>{dataCard.text}</Card.Text>
                  <div className='d-grid gap-2'>
                    <Button variant='primary' className='home-button mb-3'>
                      {dataCard.buttonText}
                    </Button>
                  </div>
                  <Card.Text className='mt-3'>
                    <small className='home-consists d-flex justify-content-center'>
                      {i18n[`uiTexts${LSLang}`].homeConsists}
                    </small>
                  </Card.Text>
                  <ListGroup variant='flush'>
                    {dataCard.screensFeaturesList.map(screenFeature => (
                      <ListGroup.Item key={uuidv4()}>
                        {screenFeature.isScreen && '🖥️'}
                        {screenFeature.isFeature && '⚛️'}{' '}
                        {screenFeature.isExtra && (
                          <Badge bg='light' text='dark'>
                            EXTRA
                          </Badge>
                        )}{' '}
                        {screenFeature.text}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className='my-4'>
          <small className='text-center '>
            {i18n[`uiTexts${LSLang}`].homeMadeBy}{' '}
            <a href='http://https://www.linkedin.com/in/jorge-vicens-valor-6ab93721/'>Jorge Vicens Valor</a>
          </small>
        </Row>
      </div>
    </Container>
  )
}

export default Home
