import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacterByIdAndRandomQuote, fetchRandomQuoteByAuthor } from '../../../store/actions'
import { useLanguage } from '../../../context/lang-context'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import GenericButton from '../../../components/Mvp/GenericButton/GenericButton'

import constants from '../../../store/constants'

import * as i18n from './i18n'
import uuidv4 from '../../../lib/helpers/generateUuid'

import classes from './CharacterDetail.module.scss'

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
                />
              </Col>
              <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
                <Card className='order-1'>
                  <Card.Body>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>Name:</span>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={8} xl={8} xxl={8} className='ps-0 pe-4'>
                        <span>{characterByIdAndRandomQuoteReducerSelector.data.name}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>Nickname:</span>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={8} xl={8} xxl={8} className='ps-0 pe-4'>
                        <span>{characterByIdAndRandomQuoteReducerSelector.data.nickname}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>Birthday:</span>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={8} xl={8} xxl={8} className='ps-0 pe-4'>
                        <span>{characterByIdAndRandomQuoteReducerSelector.data.birthday}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>
                          {characterByIdAndRandomQuoteReducerSelector.data.occupation.length > 1
                            ? 'Occupations:'
                            : 'Occupation:'}
                        </span>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={7} xl={7} xxl={7} className='ps-0 pe-4'>
                        {characterByIdAndRandomQuoteReducerSelector.data.occupation.length > 1
                          ? characterByIdAndRandomQuoteReducerSelector.data.occupation.map((occupation, index) => (
                              <span key={uuidv4()}>
                                {occupation}
                                {index === characterByIdAndRandomQuoteReducerSelector.data.occupation.length - 1
                                  ? ''
                                  : ', '}{' '}
                              </span>
                            ))
                          : characterByIdAndRandomQuoteReducerSelector.data.occupation}
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>Portrayed by:</span>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={8} xl={8} xxl={8} className='ps-0 pe-4'>
                        <span>{characterByIdAndRandomQuoteReducerSelector.data.portrayed}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>Status:</span>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={8} xl={8} xxl={8} className='ps-0 pe-4'>
                        <span>{characterByIdAndRandomQuoteReducerSelector.data.status}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>Appears in:</span>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={8} xl={8} xxl={8} className='ps-0 pe-4'>
                        <span>{characterByIdAndRandomQuoteReducerSelector.data.category}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
                        <span className='text-muted'>Appears in Seasons:</span>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={7} xl={7} xxl={7} className='ps-0 pe-4'>
                        {characterByIdAndRandomQuoteReducerSelector.data.appearance.length > 1
                          ? characterByIdAndRandomQuoteReducerSelector.data.appearance.map((appearance, index) => (
                              <span key={uuidv4()}>
                                {appearance}
                                {index === characterByIdAndRandomQuoteReducerSelector.data.appearance.length - 1
                                  ? ''
                                  : ', '}{' '}
                              </span>
                            ))
                          : characterByIdAndRandomQuoteReducerSelector.data.appearance}
                      </Col>
                    </Row>
                    <hr className='m-3' />
                    <Row className='mt-3 pt-0 px-4'>
                      <Button
                        variant='primary'
                        className='mt-auto'
                        onClick={() => dispatch(fetchCharacterByIdAndRandomQuote(id))}
                      >
                        Fetch new quote
                      </Button>
                    </Row>
                  </Card.Body>
                </Card>
                <p className={`d-flex px-xs-4 px-sm-4 px-md-3 px-lg-3 px-xl-3 px-xxl-3 m-5`}>
                  {characterByIdAndRandomQuoteReducerSelector.status === 'rejected' && 'ERROR!'}
                  {characterByIdAndRandomQuoteReducerSelector.status === 'pending' && 'loading content…'}
                  {characterByIdAndRandomQuoteReducerSelector.status === 'fulfilled' && (
                    <span className={`${classes['quote']}`}>
                      {characterByIdAndRandomQuoteReducerSelector.data?.quote || 'No quotes available'}
                    </span>
                  )}
                </p>
              </Col>
            </Row>
          </>
        )}
      </div>
    </Container>
  )
}

export default CharacterDetail
