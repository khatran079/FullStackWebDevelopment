
const Header = (props) => {
  console.log(props)
  return(
    <header>
      
      <h1>Welcome to the {props.course} Course</h1>
    </header>
  )
}

const Content =({parts}) => {
  return(
    <main>
      <Part1 p1={parts[0].name} e1={parts[0].exercises}></Part1>
      <Part2 p2={parts[1].name} e2={parts[1].exercises}></Part2>
      <Part3 p3={parts[2].name} e3={parts[2].exercises}></Part3>
    </main>
  )
}

const Part1 =({p1,e1}) =>{
  return(
    <>
      <p>{p1} {e1}</p>
    </>
  )
}

const Part2 =({p2,e2}) =>{
  return(
    <>
      <p>{p2} {e2}</p>
    </>
  )
}

const Part3 =({p3,e3}) =>{
  return(
    <>
      <p>{p3} {e3}</p>
    </>
  )
}

const Total = ({parts}) => {
  return(
    <>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </>
  )
}

const App = () => {

   
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using pros to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
   ]
  }
  
  


  return (
    <div>
      <Header course = {course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  )

}

export default App
