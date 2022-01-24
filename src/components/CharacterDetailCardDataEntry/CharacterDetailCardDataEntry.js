import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function CharacterDetailCardDataEntry({ selector }) {
  return (
    <Row>
      <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='d-flex justify-content-end text-end'>
        <span className='text-muted'>Name:</span>
      </Col>
      <Col xs={6} sm={6} md={6} lg={8} xl={8} xxl={8} className='ps-0 pe-4'>
        <span>{selector.data.name}</span>
      </Col>
    </Row>
  )
}

export default CharacterDetailCardDataEntry
