import { useState } from 'react'
import Submit from './Submit'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'


const Input = ({setClicked, postList, setPostList, depth}) => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    return (
        <>
            
            <Card className='shadow mb-4 bg-white rounded' style={{ width: '50rem' }}>
                <Card.Header><Card.Title><strong>New Post</strong></Card.Title></Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control as='input' className='h+100' size='lg' placeholder="Name:"
                            style={{fontSize: '18px'}} onChange={e => setName(e.target.value)} value={name}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" size='lg' placeholder="Write a new post..."
                            style={{fontSize: '18px'}} onChange={e => setMessage(e.target.value)} value={message} />
                        </Form.Group>
                        <Form.Group>
                            <Submit name={name} message={message} setName={setName} 
                            setMessage={setMessage} setClicked={setClicked} postList={postList} 
                            setPostList={setPostList} reply={false} width={50} depth={depth}/>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            
        </>
        
    )
}

export default Input