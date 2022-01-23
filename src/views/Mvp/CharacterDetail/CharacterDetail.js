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

  //   characterData.occupation.map((occupation, index) => {
  //     return index === characterData.occupation.length - 1 ? '' : ', '
  //   })
  // }

  return (
    <Container className='d-flex min-vh-100'>
      <div className='mt-4'>
        <Row className='mt-5 mb-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <h1 className='home-title text-center'>Character Details</h1>
            <GenericButton onClick={history.goBack} variant='primary' contents={i18n[`uiTexts${LSLang}`].goBack} />
          </div>
        </Row>
        {/* {error ? <h1>error</h1> : !isLoaded ? <h1>loading...</h1> : <h1>fulfilled</h1>} */}
        {error ? (
          <p className='home-title text-center'>ERROR!</p>
        ) : !isLoaded ? (
          <p>loading content...</p>
        ) : (
          <Row xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <Col className='mb-3'>
              <Card className='h-100'>
                <Row className='g-0'>
                  <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                    <Card.Img
                      rounded
                      variant='top'
                      className='m-2'
                      src={characterData.img}
                      alt={`Picture of ${characterData.img}`}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={9} xl={9} xxl={9}>
                    <Card.Body className='d-flex flex-column'>
                      <Row>
                        <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className='d-flex justify-content-end'>
                          <span className='text-muted'>Name:</span>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={9} xl={9} xxl={9} className='p-0'>
                          {characterData.name}
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className='d-flex justify-content-end'>
                          <span className='text-muted'>Nickname:</span>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={9} xl={9} xxl={9} className='p-0'>
                          {characterData.nickname}
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className='d-flex justify-content-end'>
                          <span className='text-muted'>Birthday:</span>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={9} xl={9} xxl={9} className='p-0'>
                          {characterData.birthday}
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className='d-flex justify-content-end'>
                          <span className='text-muted'>
                            {characterData.occupation.length > 1 ? 'Occupations:' : 'Occupation:'}
                          </span>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={9} xl={9} xxl={9} className='p-0'>
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
                      {/* <Button
                    variant='primary'
                    as={Link}
                    to={`/mvp/character-detail/${character.char_id}`}
                    className='mt-auto '
                  >
                    {i18n[`uiTexts${LSLang}`].characterDetail}
                  </Button> */}
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            {/* <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card>
                <Card.Img src={characterData.img} alt={`Picture of ${characterData.name}`} />
              </Card>
            </Col>
            <Col xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
              <Card>
                <Table>
                  <tbody>
                    <tr>
                      <td>Name: {characterData.name}</td>
                    </tr>
                    <tr>
                      <td>Nickname: {characterData.nickname}</td>
                    </tr>
                    <tr>
                      <td>Birthday: {characterData.birthday}</td>
                    </tr>
                    <tr>
                      <td>Occupation: {characterData.occupation}</td>
                    </tr>
                    <tr>
                      <td>Portrayed by: {characterData.portrayed}</td>
                    </tr>
                    <tr>
                      <td>Status: {characterData.status}</td>
                    </tr>
                    <tr>
                      <td>Appears in: {characterData.category}</td>
                    </tr>
                    <tr>
                      <td>Appears in the TV Shows: {characterData.category}</td>
                    </tr>
                    <tr>
                      <td>Appears in the Breaking Bad Seasons: {characterData.appearance}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col> */}
          </Row>
        )}
      </div>
    </Container>
  )
}

export default CharacterDetail
