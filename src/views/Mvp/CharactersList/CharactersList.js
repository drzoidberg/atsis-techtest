import React from 'react'
import { useHistory } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import GenericButton from '../../../components/Mvp/GenericButton/GenericButton'
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
  let history = useHistory()

  React.useEffect(() => {
    dispatch(fetchAllCharacters({ limit: 'none', offset: 'none' }))
  }, [dispatch])

  // console.log(allCharactersList)
  return (
    <Container className='pt-5'>
      <div className='mt-4'>
        <Row className='mt-5 mb-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <h1 className='home-title text-center mb-0'>{i18n[`uiTexts${LSLang}`].charactersList}</h1>
            <GenericButton onClick={history.goBack} variant='primary' contents={i18n[`uiTexts${LSLang}`].goBack} />
          </div>
        </Row>
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
