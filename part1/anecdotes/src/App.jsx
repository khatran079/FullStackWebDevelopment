import { use } from 'react'
import { useState } from 'react'


function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const ranNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)

  }
  
  const [index, setIndex] = useState(0) 
  // const [selected, setSelected] = useState(0)


  const [points, updatePoints] = useState([0,0,0,0,0,0,0,0])

  
  const handlePoints = () =>{
    const newPoints = [...points];
    newPoints[index] += 1;
    updatePoints(newPoints);
  }

  const  mostVote = () =>{
    const maxValue = Math.max(...points)
    const maxIndex = points.indexOf(maxValue);
    return maxIndex;
  }
  
  
  
  return (
    <div>
      <p>{anecdotes[index]}</p>
      <p>has {points[index]} votes</p>
      <button onClick={handlePoints}>vote</button>
      <button onClick={ () => {setIndex(ranNum(0,anecdotes.length-1))}}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVote()]}</p>
      <p>has {points[mostVote()]} votes</p>
    </div>
  )
}


export default App
