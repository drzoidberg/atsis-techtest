import React from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import Placeholder from 'react-bootstrap/Placeholder'
import uuidv4 from '../../lib/generateUuid'
import * as i18n from './i18n'
import { useLanguage } from '../../context/lang-context'

import classes from './CharacterCard.module.scss'

function CharacterCard({ character }) {
  const [LSLang] = useLanguage()

  const occupationsStr = character.occupation.join(', ')

  return (
    <Col key={uuidv4()} xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} className='mb-3'>
      <Card className='h-100'>
        <Link to={`/mvp/character-detail/${character.char_id}`}>
          <Card.Img
            variant='top'
            className={classes['character-card-img']}
            src={character.img}
            alt={`Picture of ${character.img}`}
          />
        </Link>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{`${character.name}`}</Card.Title>
          <Card.Subtitle>
            <em>{`"${character.nickname}"`}</em>
          </Card.Subtitle>
          <Card.Text className='text-muted mt-3'>{occupationsStr}</Card.Text>
          <Button variant='primary' as={Link} to={`/mvp/character-detail/${character.char_id}`} className='mt-auto '>
            {i18n[`uiTexts${LSLang}`].characterDetail}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CharacterCard
