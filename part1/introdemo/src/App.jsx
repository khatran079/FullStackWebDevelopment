import { useState } from "react"



//hook


const App = () =>{
  // const[counter, setCounter] = useState(0)
  // console.log('rendering with counter value', counter)

  // const increaseByOne = () => {
  //   console.log('increasing, value before',counter)
  //   setCounter(counter + 1)}
      
  // //function to decrease by one
  // const decreaseByOne = () => {
  //   console.log('decreasing, value before',counter)
  //   setCounter(counter - 1)
  // }
  // const setToZero = () => {
  //   console.log('reseting to zero, value before',counter)
  //   setCounter(0)}



  // return (
  //   <div>
  //     <Display counter = {counter}></Display>
  //     <Button onClick = {increaseByOne} text = 'plus'></Button>
  //     <Button onClick = {decreaseByOne} text = 'minus'></Button>
  //     <Button onClick = {setToZero} text = 'zero'></Button>
  //   </div>
    
  // )
  
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
    
  // const[clicks, setClicks] = useState({left: 0, right: 0})

  // const[left, setLeft] = useState(0)
  // const[right,setRight] = useState(0)
  // const[allClicks, setAll] = useState([])
  // const [total, setTotal] = useState(0)
  
  // const handleLeftClick = () => {
  //   setAll(allClicks.concat('L'));
  //   const updatedLeft = left + 1;
  //   setLeft(updatedLeft)
  //   setTotal(right + updatedLeft)
  // }

  // const handleRightClick = () => {
  //   setAll(allClicks.concat('R'))
  //   const updatedRight = right + 1;
  //   setRight(updatedRight)
  //   setTotal(updatedRight + left)
  // }

  // const Button = ({handleClick, text}) => {
  //   return(
  //     <button onClick={handleClick}>{text}</button>
  //   )
  // }

  // const History = (props) => {
  //   console.log('props value is',props)
    
  //   if(props.allClicks.length === 0){
  //     return (
  //       <div>
  //         the app is used by pressing the buttons
  //       </div>
  //     )
  //   }
  //   return (
  //     <div>
  //       button press history:  {props.allClicks.join(' ')}
  //     </div>
  //   )
  // }
 
  // return (
  //   <div>
  //     {left}
  //     <Button handleClick={handleLeftClick} text = "add"></Button>  
  //     <Button handleClick={handleRightClick} text = "minus"></Button>
  //     {right}
  //     <History allClicks = {allClicks}></History>
  //     <p>total: {total}</p>
  //   </div>
  // )

  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => {
    
    const seValue = () => {
      
      console.log(newValue)
      setValue(newValue)
    }
    
    return seValue
    
  }
 

  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>button</button>
      <button onClick={setToValue(0)}>button</button>
      <button onClick={setToValue(value + 2)}>button</button>
    </div>
  )
}



const Display = ({counter}) => {
  console.log(counter)
  return (
    <div>{counter}</div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick = {onClick}>{text}</button>

  )
}
export default App
