import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacterByIdAndRandomQuote } from '../../store/actions'
import { useLanguage } from '../../context/lang-context'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import GenericButton from '../../components/GenericButton/GenericButton'
import CharacterQuote from '../../components/CharacterQuote/CharacterQuote'
import * as i18n from './i18n'
import CharacterDetailCard from '../../components/CharacterDetailCard/CharacterDetailCard'

function CharacterDetail() {
  const [LSLang] = useLanguage()
  const { id } = useParams()
  let history = useHistory()
  const dispatch = useDispatch()

  const characterByIdAndRandomQuoteReducerSelector = useSelector(state => state.characterByIdAndRandomQuote)

  React.useEffect(() => {
    dispatch(fetchCharacterByIdAndRandomQuote(id))
  }, [dispatch, id])

  return (
    <Container className='pt-5'>
      <div className='mt-4'>
        <Row className='mt-5 mb-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <h1 className='home-title text-center mb-0'>Character Details</h1>
            <GenericButton onClick={history.goBack} variant='primary' contents={i18n[`uiTexts${LSLang}`].goBack} />
          </div>
        </Row>
        {characterByIdAndRandomQuoteReducerSelector.status === 'rejected' && 'ERROR!'}
        {characterByIdAndRandomQuoteReducerSelector.status === 'pending' && 'loading…'}
        {characterByIdAndRandomQuoteReducerSelector.status === 'fulfilled' && (
          <>
            <Row>
              <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='mb-3 float-start'>
                <Image
                  fluid
                  rounded
                  src={characterByIdAndRandomQuoteReducerSelector.data.img}
                  alt={`Picture of ${characterByIdAndRandomQuoteReducerSelector.data.img}`}
                  style={{ objectFit: 'cover', height: '38rem' }}
                />
              </Col>
              <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
                <CharacterDetailCard id={id} selector={characterByIdAndRandomQuoteReducerSelector} />
                <CharacterQuote selector={characterByIdAndRandomQuoteReducerSelector} />
              </Col>
            </Row>
          </>
        )}
      </div>
    </Container>
  )
}

export default CharacterDetail
