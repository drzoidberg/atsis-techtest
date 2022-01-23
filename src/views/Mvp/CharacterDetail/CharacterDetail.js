import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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

  return (
    <Container className='d-flex min-vh-100'>
      <div className='mt-4'>
        <Row className='mt-5 mb-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <h1 className='home-title text-center'>testing</h1>
            <GenericButton onClick={history.goBack} variant='primary' contents={i18n[`uiTexts${LSLang}`].goBack} />
          </div>
        </Row>
        {/* {error ? <h1>error</h1> : !isLoaded ? <h1>loading...</h1> : <h1>fulfilled</h1>} */}
        <p>lo veo?</p>
        {error ? (
          <p className='home-title text-center'>ERROR!</p>
        ) : !isLoaded ? (
          <Row>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card>
                <div style={{ color: 'grey', width: '100%', height: '50%' }} />
              </Card>
            </Col>
            <Col xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
              <Card>loading info...</Card>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card>
                <Card.Img src={characterData.img} alt={`Picture of ${characterData.name}`} />
              </Card>
            </Col>
            <Col xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
              <Card>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe accusantium nostrum accusamus dolore
                voluptates nulla unde omnis rem, nesciunt voluptas minima temporibus, maiores magni error aut quasi
                odio, excepturi iusto optio? Quo deleniti, iste provident id unde itaque porro? Eos minus facilis
                doloribus nulla dignissimos. Asperiores labore mollitia sit dolores modi atque, accusantium consectetur
                earum cupiditate praesentium. Iusto sit, sunt quisquam a laudantium ullam consectetur modi dolorem
                reprehenderit corrupti, omnis voluptatibus cupiditate, facere quas culpa voluptatum magni. Praesentium
                magnam nisi incidunt? Adipisci necessitatibus ipsam, quia eaque ipsa esse laboriosam nobis quasi
                recusandae, blanditiis quam, excepturi dolorum suscipit! Vero, atque velit!
              </Card>
            </Col>
          </Row>
        )}
      </div>
    </Container>
  )
}

export default CharacterDetail
