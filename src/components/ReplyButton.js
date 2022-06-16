import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Submit from './Submit'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { ChatLeftText } from 'react-bootstrap-icons'

const ReplyButton = ({width, depth}) => {

  const [reply, setReply] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [postList, setPostList] = useState([])
  const [clicked, setClicked] = useState(false)
  const [over, setOver] = useState(false)
  
  const handleClick = () => {
    setReply(!reply)
  } 

  return (
    <>
        <span className={over? '':'text-muted'} onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)} style={{cursor: 'pointer'}} onClick={() => handleClick()}>
          <ChatLeftText ></ChatLeftText>
          <text style={{fontSize: '16px'}}>     Reply</text>
        </span>
        {/* <Button >Reply</Button> */}
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

export default ReplyButton
