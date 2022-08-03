import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
import Button from 'react-bootstrap/Button'

// adds a post to the post list on click
const Submit = ({ name, message, setName, setMessage, setClicked, postList, setPostList, reply, width, depth }) => {
  const handleClick = () => {
    setName('')
    setMessage('')
    setClicked(true)
    setPostList(postList.concat(
      <Post name={name} message={message} width={width} depth={depth} key={postList.length}/>))
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

Submit.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
  setClicked: PropTypes.func.isRequired,
  postList: PropTypes.array.isRequired,
  setPostList: PropTypes.func.isRequired,
  reply: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  depth: PropTypes.number.isRequired
}

export default Submit
