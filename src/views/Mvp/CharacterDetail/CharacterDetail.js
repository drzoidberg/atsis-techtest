import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CharacterCard from '../../../components/Mvp/CharacterCard/CharacterCard'
import * as i18n from './i18n'
import { useLanguage } from '../../../context/lang-context'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacterById } from '../../../store/actions'
import uuidv4 from '../../../lib/helpers/generateUuid'

function CharacterDetail() {
  const [LSLang] = useLanguage()
  const characterData = useSelector(state => state.characterById.data)
  const dispatch = useDispatch()
  const { id } = useParams()

  React.useEffect(() => {
    dispatch(fetchCharacterById(id))
  }, [dispatch])
  console.log(characterData)

  return (
    <Container className='d-flex min-vh-100 justify-content-center'>
      <div className='mt-4'>
        <Row className='mt-5 mb-3'>
          {/* <h1 className='home-title text-center'>{i18n[`uiTexts${LSLang}`].charactersList}</h1> */}
          <h1 className='home-title text-center'>Personaje</h1>
        </Row>
      </div>
    </Container>
  )
}

export default CharacterDetail
