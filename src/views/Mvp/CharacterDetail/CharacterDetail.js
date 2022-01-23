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
import { fetchCharacterById } from '../../../store/actions'
import uuidv4 from '../../../lib/helpers/generateUuid'

function CharacterDetail() {
  const [LSLang] = useLanguage()
  const { id } = useParams()
  let history = useHistory()
  const dispatch = useDispatch()

  const characterReducerData = useSelector(state => state.characterById)
  const [error, setError] = React.useState(false)
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [characterData, setCharacterData] = React.useState({})

  React.useEffect(() => {
    dispatch(fetchCharacterById(id))
  }, [dispatch, id])

  React.useEffect(() => {
    if (characterReducerData.status === 'rejected') {
      setError(true)
    } else if (characterReducerData.status === 'pending') {
      setIsLoaded(false)
    } else if (characterReducerData.status === 'fulfilled') {
      setCharacterData(characterReducerData.data[0])
      setIsLoaded(true)
    }
  }, [characterReducerData])

  console.log(characterData)

  return (
    <Container className='d-flex min-vh-100'>
      <div className='mt-4'>
        <Row className='mt-5 mb-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <h1 className='home-title text-center mb-0'>Character Details</h1>
            <GenericButton onClick={history.goBack} variant='primary' contents={i18n[`uiTexts${LSLang}`].goBack} />
          </div>
        </Row>
        {/* {error ? <h1>error</h1> : !isLoaded ? <h1>loading...</h1> : <h1>fulfilled</h1>} */}
        {error ? (
          <p className='home-title text-center'>ERROR!</p>
        ) : !isLoaded ? (
          <p>loading content...</p>
        ) : (
          // <Row className='d-flex'>
          <>
            <Row>
              <Col
                xs={{ span: 12, order: 0, offset: 0 }}
                sm={{ span: 12, order: 0, offset: 0 }}
                md={{ span: 12, order: 0, offset: 0 }}
                lg={{ span: 4, order: 2, offset: 2 }}
                xl={{ span: 4, order: 2, offset: 2 }}
                xxl={{ span: 4, order: 2, offset: 2 }}
                className='mb-3'
              >
                <Image
                  className='d-flex'
                  fluid
                  rounded
                  src={characterData.img}
                  alt={`Picture of ${characterData.img}`}
                />
              </Col>
              <Col
                xs={{ span: 12, order: 0, offset: 0 }}
                sm={{ span: 12, order: 0, offset: 0 }}
                md={{ span: 12, order: 0, offset: 0 }}
                lg={{ span: 6, order: 1, offset: 0 }}
                xl={{ span: 6, order: 1, offset: 0 }}
                xxl={{ span: 6, order: 1, offset: 0 }}
              >
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
                              <span>
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
                              <span>
                                {appearance}
                                {index === characterData.appearance.length - 1 ? '' : ', '}{' '}
                              </span>
                            ))
                          : characterData.appearance}
                      </Col>
                    </Row>
                    {/* <Button
                    variant='primary'
                    as={Link}
                    to={`/mvp/character-detail/${character.char_id}`}
                    className='mt-auto '
                  >
                    {i18n[`uiTexts${LSLang}`].characterDetail}
                  </Button> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col fluid xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                <Card style={{ border: 'none' }}>
                  <Card.Body>
                    <h1 className='text-muted'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptate.
                    </h1>
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
