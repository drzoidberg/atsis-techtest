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
          <Row>
            <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
              <Image fluid rounded src={characterData.img} alt={`Picture of ${characterData.img}`} />
            </Col>
            <Col xs={12} sm={12} md={12} lg={9} xl={9} xxl={9}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col xs={5} sm={5} md={5} lg={3} xl={3} xxl={3} className='d-flex justify-content-end'>
                      <span className='text-muted'>Name:</span>
                    </Col>
                    <Col xs={7} sm={7} md={7} lg={3} xl={3} xxl={3} className='p-0'>
                      {characterData.name}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={5} sm={5} md={5} lg={3} xl={3} xxl={3} className='d-flex justify-content-end'>
                      <span className='text-muted'>Nickname:</span>
                    </Col>
                    <Col xs={7} sm={7} md={7} lg={3} xl={3} xxl={3} className='p-0'>
                      {characterData.nickname}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={5} sm={5} md={5} lg={3} xl={3} xxl={3} className='d-flex justify-content-end'>
                      <span className='text-muted'>Birthday:</span>
                    </Col>
                    <Col xs={7} sm={7} md={7} lg={3} xl={3} xxl={3} className='p-0'>
                      {characterData.birthday}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={5} sm={5} md={5} lg={3} xl={3} xxl={3} className='d-flex justify-content-end'>
                      <span className='text-muted'>
                        {characterData.occupation.length > 1 ? 'Occupations:' : 'Occupation:'}
                      </span>
                    </Col>
                    <Col xs={7} sm={7} md={7} lg={3} xl={3} xxl={3} className='p-0'>
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
                  <hr className='mx-5' />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam numquam dicta praesentium est animi
                  autem tempore reprehenderit facilis excepturi provident porro aspernatur molestiae, incidunt culpa
                  sunt facere, suscipit, corrupti omnis. Recusandae facere, beatae quibusdam voluptas quos alias amet
                  quisquam. Laboriosam dolorem, maiores quis expedita esse impedit deserunt doloribus tempora culpa enim
                  magnam voluptatum modi. Tempore maiores ipsam magni. Sunt perspiciatis obcaecati delectus dolore
                  possimus. Maxime repudiandae, voluptates laboriosam debitis quidem ad magnam inventore vel in eum
                  ducimus molestiae expedita quos maiores architecto similique est? Atque magni quia tenetur temporibus
                  voluptates odio voluptas deserunt aspernatur fugit id explicabo sapiente, incidunt quod.
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
        )}
      </div>
    </Container>
  )
}

export default CharacterDetail
