import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
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

  React.useEffect(() => {
    dispatch(fetchAllCharacters({ limit: 'none', offset: 'none' }))
  }, [dispatch])
  console.log(allCharactersList)

  return (
    <Container className='d-flex min-vh-100 justify-content-center'>
      <div className='mt-4'>
        <Row className='mt-5 mb-3'>
          <h1 className='home-title text-center'>{i18n[`uiTexts${LSLang}`].charactersList}</h1>
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
