import React from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import Placeholder from 'react-bootstrap/Placeholder'
import uuidv4 from '../../../lib/helpers/generateUuid'
import * as i18n from './i18n'
import { useLanguage } from '../../../context/lang-context'

function CharacterCard({ character }) {
  const [LSLang] = useLanguage()

  const occupationsStr = character.occupation.join(', ')

  return (
    <Col key={uuidv4()} xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} className='mb-3'>
      <Card className='h-100'>
        <Card.Img variant='top' className='height-100' src={character.img} alt={`Picture of ${character.img}`} />
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text className='text-muted'>{occupationsStr}</Card.Text>
          <Button variant='primary' as={Link} to={`/${character.name}`} className='mt-auto '>
            {i18n[`uiTexts${LSLang}`].characterDetail}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CharacterCard
