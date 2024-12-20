import { useState } from "react"
import './App.css'

const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <h2>give feeback</h2>
      <Button onClick={() =>{setGood(good + 1)}} text = 'good'></Button>
      <Button onClick={() =>{setNeutral(neutral + 1)}} text = 'neutral'></Button>
      <Button onClick={() =>{setBad(bad + 1)}} text = 'bad'></Button>
      <Statistics good = {good} neutral = {neutral} bad = {bad} ></Statistics>
      

    </div>
  )
}


const Button = ({ onClick, text }) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / all
  if(good === 0 && neutral === 0  && bad === 0){
    return (
      <div>
        <h2>statistics</h2>
        No feedback given
      </div>
    )
  }
  else 
    return(
      // <>
      //   <h2>statistics</h2>
      //   good {good} <br />
      //   neutral {neutral} <br />
      //   bad {bad} <br />
      //   all {good + neutral + bad} <br /> 
      //   average {average} <br />
      //   positive {(good / all) * 100} % <br />

      // </>
      <>
      <h2>statistics</h2>
      <table>
        <tr>
          <td>good &nbsp;&nbsp;&nbsp;&nbsp;{good}</td>
        </tr>
        <tr>
          <td>neutral &nbsp;{neutral}</td>
        </tr>
        <tr>
        <td>bad &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{bad}</td>
        </tr>
        <tr>
        <td>all &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{all}</td>
        </tr>
        <tr>
        <td>average {average}</td>
        </tr>
        <tr>
        <td>positive {good/all * 100} %</td>
        </tr>

      </table>
      </>
    )
  
}

export default App
