import React from 'react'
import Reply from './Reply'
import Voter from './Voter'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'

// displays the post
const Post = ({ name, message, width, depth }) => {
  const now = Date()
  return (
    <>
      <Container className='mt-2'>
        <Row>
          <Col></Col>
          <Col>
            <Card className='shadow-sm mb-2 mr-1 bg-white rounded' style={{ width: width + 'rem' }}>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title style={{ color: 'rgb(51, 102, 255)' }}>{name}</Card.Title>
                    <Card.Text className="mb-2 text-muted">
                    Posted {now}
                    </Card.Text>
                    <Card.Text style={{ fontSize: '16px' }}>{message}</Card.Text>
                  </Col>
                  <Col sm={1}><Voter /></Col>
                </Row>
                <div>
                  <Reply width={width} depth={depth}/>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  depth: PropTypes.number.isRequired
}

export default Post
