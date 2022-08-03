import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Submit from './Submit'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { ChatLeftText } from 'react-bootstrap-icons'

// reply button for a post which on click opens up a form
const ReplyButton = ({ width, depth }) => {
  const [reply, setReply] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [postList, setPostList] = useState([])
  const [clicked, setClicked] = useState(false)
  const [over, setOver] = useState(false)

  return (
    <>
        <span className={over ? '' : 'text-muted'} onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)} style={{ cursor: 'pointer' }} onClick={() => setReply(!reply)}>
          <ChatLeftText ></ChatLeftText>
          <text style={{ fontSize: '16px' }}>     Reply</text>
        </span>
        {
            reply &&
            (
              <Card className='shadow-sm mt-2 mb-2 bg-white rounded' style={{ width: width + 'rem' }}>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Control type="text" placeholder="Name:"
                      onChange={e => setName(e.target.value)} value={name}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPost">
                      <Form.Control as="textarea" placeholder="Reply:"
                      onChange={e => setMessage(e.target.value)} value={message} />
                    </Form.Group>
                    <Form.Group>
                      <Submit name={name} message={message} setName={setName}
                      setMessage={setMessage} setClicked={setClicked} postList={postList}
                      setPostList={setPostList} reply={!reply} width={width} depth={depth}/>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            )
        }
        {postList}
    </>
  )
}

ReplyButton.propTypes = {
  width: PropTypes.number.isRequired,
  depth: PropTypes.number.isRequired
}
export default ReplyButton
