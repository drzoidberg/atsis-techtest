import React from 'react'
import { useDispatch } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useLanguage } from '../../context/lang-context'
import { fetchCharacterByIdAndRandomQuote } from '../../store/actions'
import * as i18n from './i18n'
import uuidv4 from '../../lib/generateUuid'

function CharacterDetailCard({ selector, id }) {
  const dispatch = useDispatch()
  const [LSLang] = useLanguage()

  return (
    <Card className='order-1'>
      <Card.Body>
        <Row>
          <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
            <span className='text-muted'>{i18n[`uiTexts${LSLang}`].name}:</span>
          </Col>
          <Col xs={6} sm={6} md={6} lg={8} xl={8} xxl={8} className='ps-0 pe-4'>
            <span>{selector.data.name}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
            <span className='text-muted'>{i18n[`uiTexts${LSLang}`].nickName}:</span>
          </Col>
          <Col xs={6} sm={6} md={6} lg={8} xl={8} xxl={8} className='ps-0 pe-4'>
            <span>{selector.data.nickname}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
            <span className='text-muted'>{i18n[`uiTexts${LSLang}`].birthday}:</span>
          </Col>
          <Col xs={6} sm={6} md={6} lg={8} xl={8} xxl={8} className='ps-0 pe-4'>
            <span>{selector.data.birthday}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
            <span className='text-muted'>
              {selector.data.occupation.length > 1
                ? i18n[`uiTexts${LSLang}`].occupations
                : i18n[`uiTexts${LSLang}`].occupation}
              :
            </span>
          </Col>
          <Col xs={6} sm={6} md={6} lg={7} xl={7} xxl={7} className='ps-0 pe-4'>
            {selector.data.occupation.length > 1
              ? selector.data.occupation.map((occupation, index) => (
                  <span key={uuidv4()}>
                    {occupation}
                    {index === selector.data.occupation.length - 1 ? '' : ', '}{' '}
                  </span>
                ))
              : selector.data.occupation}
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
            <span className='text-muted'>{i18n[`uiTexts${LSLang}`].portrayed}:</span>
          </Col>
          <Col xs={6} sm={6} md={6} lg={8} xl={8} xxl={8} className='ps-0 pe-4'>
            <span>{selector.data.portrayed}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
            <span className='text-muted'>{i18n[`uiTexts${LSLang}`].status}:</span>
          </Col>
          <Col xs={6} sm={6} md={6} lg={8} xl={8} xxl={8} className='ps-0 pe-4'>
            <span>{selector.data.status}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
            <span className='text-muted'>{i18n[`uiTexts${LSLang}`].appearance}:</span>
          </Col>
          <Col xs={6} sm={6} md={6} lg={8} xl={8} xxl={8} className='ps-0 pe-4'>
            <span>{selector.data.category}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
            <span className='text-muted'>{i18n[`uiTexts${LSLang}`].appearanceSeasons}:</span>
          </Col>
          <Col xs={6} sm={6} md={6} lg={7} xl={7} xxl={7} className='ps-0 pe-4'>
            {selector.data.appearance.length > 1
              ? selector.data.appearance.map((appearance, index) => (
                  <span key={uuidv4()}>
                    {appearance}
                    {index === selector.data.appearance.length - 1 ? '' : ', '}{' '}
                  </span>
                ))
              : selector.data.appearance}
          </Col>
        </Row>
        <hr className='m-3' />
        <Row className='mt-3 pt-0 px-4'>
          <Button variant='primary' className='mt-auto' onClick={() => dispatch(fetchCharacterByIdAndRandomQuote(id))}>
            {i18n[`uiTexts${LSLang}`].fetchNewQuote}
          </Button>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default CharacterDetailCard
