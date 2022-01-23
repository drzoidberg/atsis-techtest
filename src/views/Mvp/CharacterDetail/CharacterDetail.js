import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Placeholder from 'react-bootstrap/Placeholder'
import GenericButton from '../../../components/Mvp/GenericButton/GenericButton'
import constants from '../../../store/constants'

import * as i18n from './i18n'
import { useLanguage } from '../../../context/lang-context'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacterById, fetchRandomQuoteByAuthor } from '../../../store/actions'
import uuidv4 from '../../../lib/helpers/generateUuid'

import classes from './CharacterDetail.module.scss'

function CharacterDetail() {
  const [LSLang] = useLanguage()
  const { id } = useParams()
  let history = useHistory()
  const dispatch = useDispatch()

  const characterReducerData = useSelector(state => state.characterById)
  const [characterError, setCharacterError] = React.useState(false)
  const [isCharacterLoaded, setIsCharacterLoaded] = React.useState(false)
  const [characterData, setCharacterData] = React.useState({})

  const randomQuoteByAuthorReducerData = useSelector(state => state.randomQuoteByAuthor)
  const [randomQuoteError, setRandomQuoteError] = React.useState(false)
  const [isQuoteLoaded, setIsQuoteLoaded] = React.useState(false)
  const [randomQuoteData, setRandomQuoteData] = React.useState({})

  React.useEffect(() => {
    dispatch(fetchCharacterById(id))
    dispatch(fetchRandomQuoteByAuthor())
  }, [dispatch, id])

  React.useEffect(() => {
    if (characterReducerData.status === 'rejected') {
      setCharacterError(true)
    } else if (characterReducerData.status === 'pending') {
      setIsCharacterLoaded(false)
    } else if (characterReducerData.status === 'fulfilled') {
      setCharacterData(characterReducerData.data[0])
      setIsCharacterLoaded(true)

      const characterName = characterData.name
      dispatch(fetchRandomQuoteByAuthor(characterName))
    }

    if (randomQuoteByAuthorReducerData.status === 'rejected') {
      setRandomQuoteError(true)
    } else if (randomQuoteData.status === 'pending') {
      setIsQuoteLoaded(false)
    } else if (randomQuoteData.status === 'fulfilled') {
      setRandomQuoteData(randomQuoteData.data[0])
      setIsQuoteLoaded(true)
    }
  }, [
    characterData.name,
    characterReducerData.data,
    characterReducerData.status,
    dispatch,
    randomQuoteByAuthorReducerData.status,
    randomQuoteData,
  ])

  console.log({ randomQuoteByAuthorReducerData })

  return (
    <Container className='d-flex min-vh-100'>
      <div className='mt-4'>
        <Row className='mt-5 mb-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <h1 className='home-title text-center mb-0'>Character Details</h1>
            <GenericButton onClick={history.goBack} variant='primary' contents={i18n[`uiTexts${LSLang}`].goBack} />
          </div>
        </Row>
        {characterError ? (
          <p className='home-title text-center'>ERROR!</p>
        ) : !isCharacterLoaded ? (
          <p>loading content...</p>
        ) : (
          <>
            <Row>
              <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='mb-3 float-start'>
                <Image fluid rounded src={characterData.img} alt={`Picture of ${characterData.img}`} />
              </Col>
              <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                <Card className='order-1'>
                  <Card.Body>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={5} xl={5} xxl={5} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>Name:</span>
                      </Col>
                      <Col className='ps-0 pe-4'>{characterData.name}</Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={5} xl={5} xxl={5} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>Nickname:</span>
                      </Col>
                      <Col className='ps-0 pe-4'>{characterData.nickname}</Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={5} xl={5} xxl={5} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>Birthday:</span>
                      </Col>
                      <Col className='ps-0 pe-4'>{characterData.birthday}</Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={5} xl={5} xxl={5} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>
                          {characterData.occupation.length > 1 ? 'Occupations:' : 'Occupation:'}
                        </span>
                      </Col>
                      <Col className='ps-0 pe-4'>
                        {characterData.occupation.length > 1
                          ? characterData.occupation.map((occupation, index) => (
                              <span key={uuidv4()}>
                                {occupation}
                                {index === characterData.occupation.length - 1 ? '' : ', '}{' '}
                              </span>
                            ))
                          : characterData.occupation}
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={5} xl={5} xxl={5} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>Portrayed by:</span>
                      </Col>
                      <Col className='ps-0 pe-4'>{characterData.portrayed}</Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={5} xl={5} xxl={5} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>Status:</span>
                      </Col>
                      <Col className='ps-0 pe-4'>{characterData.status}</Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={5} xl={5} xxl={5} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>Appears in:</span>
                      </Col>
                      <Col className='ps-0 pe-4'>{characterData.category}</Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={5} xl={5} xxl={5} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>Appears in Seasons:</span>
                      </Col>
                      <Col className='ps-0 pe-4'>
                        {characterData.appearance.length > 1
                          ? characterData.appearance.map((appearance, index) => (
                              <span key={uuidv4()}>
                                {appearance}
                                {index === characterData.appearance.length - 1 ? '' : ', '}{' '}
                              </span>
                            ))
                          : characterData.appearance}
                      </Col>
                    </Row>
                    <hr className='m-4' />
                    <Row className='pt-0 px-5 ms-4 mt-3'>
                      <Card.Body>
                        <p className={classes['pepino']}>
                          {randomQuoteError ? 'ERROR!' : !isQuoteLoaded ? 'loading content..' : randomQuoteData}
                        </p>
                      </Card.Body>
                      <Button
                        variant='primary'
                        className='mt-auto'
                        onClick={id => fetchRandomQuoteByAuthor('Walter White')}
                      >
                        Fetch new quote
                      </Button>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </div>
    </Container>
  )
}

export default CharacterDetail
