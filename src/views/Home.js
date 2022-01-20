import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

import uuidv4 from '../lib/helpers/generateUuid'

import dataCards from '../lib/componentTexts/AppComponent/dataCards.json'

function Home() {
  return (
    <Container className='d-flex align-items-center min-vh-100'>
      <div>
        <Row className='mt-4 mb-3'>
          <h1 className='text-center'>Fiddling with Breaking Bad</h1>
        </Row>
        <Row>
          <p className='text-center'>Please choose the interface version you want to try:</p>
        </Row>
        <Row>
          {dataCards.map((dataCard, index) => (
            <Col key={uuidv4()} xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className='mb-3'>
              <Card className='h-100'>
                <Card.Body>
                  <Card.Title as='h5'>{dataCard.title}</Card.Title>
                  <Card.Text>{dataCard.text}</Card.Text>
                  <div className='d-grid gap-2'>
                    <Button variant='primary' className='mb-3'>
                      {dataCard.buttonText}
                    </Button>
                  </div>
                  <Card.Text className='mt-3'>
                    <small className='d-flex justify-content-center'>
                      It consists of the following screens 🖥️ and features ⚛️:
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
            Made with 👓 by{' '}
            <a href='http://https://www.linkedin.com/in/jorge-vicens-valor-6ab93721/'>Jorge Vicens Valor</a>
          </small>
        </Row>
      </div>
    </Container>
  )
}

export default Home
