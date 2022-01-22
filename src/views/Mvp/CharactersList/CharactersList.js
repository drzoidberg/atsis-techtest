import React from 'react'
import { Link } from 'react-router-dom'
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
import { fetchAllCharacters } from '../../../store/actions'
import uuidv4 from '../../../lib/helpers/generateUuid'

function CharactersList() {
  const [LSLang] = useLanguage()
  const allCharactersList = useSelector(state => state.allCharactersList.data)
  const dispatch = useDispatch()

  console.log(allCharactersList)
  React.useEffect(() => {
    dispatch(fetchAllCharacters({ limit: 'none', offset: 'none' }))
  }, [dispatch])

  return (
    <Container className='d-flex min-vh-100 justify-content-center'>
      <div className='mt-4'>
        <Row className='mt-5 mb-3'>
          <h1 className='home-title text-center'>{i18n[`uiTexts${LSLang}`].charactersList}</h1>
        </Row>
        {/* <Row> */}
        {/* <p className='home-lead text-center'>{i18n[`uiTexts${LSLang}`].sampleText}</p> */}
        {/* </Row> */}
        <Row>
          {allCharactersList.map(character => (
            <CharacterCard key={uuidv4()} character={character} />
          ))}
        </Row>
      </div>
    </Container>
  )
}

export default CharactersList
