import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import GenericButton from '../GenericButton/GenericButton'
import uuidv4 from '../../../lib/helpers/generateUuid'
import { useLanguage } from '../../../context/lang-context'
import * as i18n from './i18n'

function DataCards() {
  const [LSLang] = useLanguage()

  return i18n[`dataCards${LSLang}`].map(dataCard => {
    return (
      <Col key={uuidv4()} xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className='mb-3'>
        <Card className='h-100'>
          <Card.Body>
            <Card.Title as='h5'>{dataCard.title}</Card.Title>
            <Card.Text>{dataCard.text}</Card.Text>
            <div className='d-grid gap-2'>
              <GenericButton
                as={Link}
                to={dataCard.to}
                variant='primary'
                className='home-button mb-3'
                contents={dataCard.buttonText}
              />
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
          <Card.Footer>
            <small className='text-muted'>{i18n[`uiTexts${LSLang}`].futhermore}</small>
          </Card.Footer>
        </Card>
      </Col>
    )
  })
}

export default DataCards
