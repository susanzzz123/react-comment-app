import React from 'react'
import PropTypes from 'prop-types'
import ReplyButton from './ReplyButton'

// recursively render the reply function such that only 3 layers of
// reply is allowed

const Reply = ({ width, depth }) => {
  if (depth === 0) {
    return null
  }
  return (
      <>
        <ReplyButton width={width - 2.55} depth={depth - 1} />
      </>
  )
}

Reply.propTypes = {
  width: PropTypes.number.isRequired,
  depth: PropTypes.number.isRequired
}
export default Reply
