const Name = ({name, setName}) => {
    return (
        <input type='text' placeholder='Name:' size={20} 
            onChange={e => setName(e.target.value)} value={name}/>
    )
}   

export default Name