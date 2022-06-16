import ReplyButton from "./ReplyButton"

const Reply = ({ width, depth }) => {
    if (depth === 0) {
      // Base case
      return null
    }
    return (
      <>
        <ReplyButton width={width-2.55} depth={depth - 1} />
      </>
    )
  }

export default Reply