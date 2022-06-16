import { useState } from 'react'
import { CaretUp, CaretDown } from 'react-bootstrap-icons'


const Voter = () => {
  const [votes, setVotes] = useState(0)
  const [upOver, setUpOver] = useState(false);
  const [downOver, setDownOver] = useState(false);

  return (
    <>
      <CaretUp size='1.2em' className={upOver ? '':'text-muted'} style={{cursor: 'pointer'}} 
      onMouseOver={() => setUpOver(true)} onMouseOut={() => setUpOver(false)}
      onClick={ () => setVotes(votes + 1)}></CaretUp>
      
      <p className='mt-3 text-muted' style={{fontSize: '18px'}}>{votes}</p>

      <CaretDown size='1.2em' className={downOver ? '':'text-muted'} style={{cursor: 'pointer'}} 
      onMouseOver={() => setDownOver(true)} onMouseOut={() => setDownOver(false)}
      onClick={ () => setVotes(votes - 1)}></CaretDown>
    </>
    
  )
}

export default Voter
