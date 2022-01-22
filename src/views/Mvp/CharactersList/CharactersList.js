import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CharacterCard from '../../../components/Mvp/CharacterCard/CharacterCard'

// import * as i18n from './i18n'
// import { useLanguage } from '../../../context/lang-context'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCharacters } from '../../../store/actions'
import uuidv4 from '../../../lib/helpers/generateUuid'

function CharactersList() {
  // const [LSLang] = useLanguage()
  const allCharactersList = useSelector(state => state.allCharactersList.data)
  const dispatch = useDispatch()

  console.log(allCharactersList)
  React.useEffect(() => {
    dispatch(fetchAllCharacters({ limit: 'none', offset: 'none' }))
  }, [dispatch])

  return (
    // <Container>
    //   <Row className='d-flex align-items-center vh-100'>
    //     <Col>
    //       <h3 className='page-not-found text-center'>
    //         <strong>Message:</strong> {i18n[`uiTexts${LSLang}`].sampleText}
    //         <Button as={Link} to='/' className='ms-3'>
    //           Go Back
    //         </Button>
    //       </h3>
    //     </Col>
    //   </Row>
    // </Container>
    <Container className='d-flex min-vh-100 justify-content-center'>
      <div className='mt-4'>
        <Row className='mt-5 mb-3'>
          <h1 className='home-title text-center'>Listado de personajes</h1>
        </Row>
        {/* <Row> */}
        {/* <p className='home-lead text-center'>{i18n[`uiTexts${LSLang}`].sampleText}</p> */}
        {/* </Row> */}
        <Row>
          {allCharactersList.map(character => (
            <CharacterCard character={character} />
            // <Col key={uuidv4()} xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} className='mb-3'>
            //   <Card className='h-100'>
            //     <Card.Img variant='top' src={character.img} />
            //     <Card.Body className='d-flex flex-column'>
            //       <Card.Title>{character.name}</Card.Title>
            //       <Card.Text>{character.occupation[0]}</Card.Text>
            //       <Button variant='primary' className='mt-auto'>
            //         Character Detail
            //       </Button>
            //     </Card.Body>
            //   </Card>
            // </Col>
          ))}
        </Row>
      </div>
    </Container>
  )
}

export default CharactersList
