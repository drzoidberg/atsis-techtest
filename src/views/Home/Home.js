import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import * as i18n from './i18n'
import { useLanguage } from '../../context/lang-context'
import DataCards from '../../components/DataCards/DataCards'

function Home() {
  const [LSLang] = useLanguage()

  return (
    <Container className='pt-5'>
      <div className='mt-4'>
        <Row className='mt-5 mb-3'>
          <h1 className='home-title text-center mb-0'>{i18n[`uiTexts${LSLang}`].homeTitle}</h1>
        </Row>
        <Row>
          <p className='home-lead text-center'>{i18n[`uiTexts${LSLang}`].homeLead}</p>
        </Row>
        <Row>
          <DataCards />
        </Row>
        <Row className='my-4'>
          <small className='text-center '>
            {i18n[`uiTexts${LSLang}`].homeMadeBy}{' '}
            <a href='http://https://www.linkedin.com/in/jorge-vicens-valor-6ab93721/'>Jorge Vicens Valor</a>
          </small>
        </Row>
      </div>
    </Container>
  )
}

export default Home
