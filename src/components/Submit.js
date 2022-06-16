import Post from './Post'
import Button from 'react-bootstrap/Button'

const Submit = ({name, message, setName, setMessage, setClicked, postList, setPostList, reply, width, depth}) => {

    const handleClick = () => {
        setName('')
        setMessage('')
        setClicked(true)
        setPostList(postList.concat(
            <Post name={name} message={message} width={width} depth={depth} key={postList.length}/>));
    }

    const isDisabled = () => {
        return name === '' || message === ''
    }

    return (
        <>  
            <Button className='text-center' variant="primary" onClick={() => handleClick()} 
            disabled={isDisabled()} hidden={reply}>Submit</Button>
        </>
    )
}
export default Submit
