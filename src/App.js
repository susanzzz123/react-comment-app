import React, { useState } from 'react'
import Title from './components/Title'
import Input from './components/Input'
import { Container, Row, Col } from 'react-bootstrap'

const App = () => {
  // maintains a list of posts
  const [postList, setPostList] = useState([])
  const [clicked, setClicked] = useState(false)
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Title />
            <Input setClicked={setClicked} postList={postList}
            setPostList={setPostList} depth={2} />
          </Col>
          <Col></Col>
        </Row>
      </Container>
        {
          clicked && (
            <div>
              {postList}
            </div>
          )
        }

    </>
  )
}
export default App
