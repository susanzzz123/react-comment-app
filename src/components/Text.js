const Text = ({message, setMessage}) => {
    return (
        <textarea placeholder='Write a new post...' size={50} 
            onChange={e => setMessage(e.target.value)} value={message}></textarea>
    )
}

export default Text