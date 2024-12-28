
const Header = () => {
  return (
    <h1>Web development curriculum</h1>
  )
}
const Course = ({course}) => {

  //Total component
  const Total = () => {
    const total = course.parts.reduce((acc,part) => {
      return acc + part.exercises;
    }, 0);
    return (
      <b>total of {total} exercises</b>
    )
  }
  //Course component
  const Course = ({part}) => {
    return (<p key = {part.id}>{part.name} {part.exercises}</p>)
  }
  return (
    <>
      <h3>{course.name}</h3>
      {/* {course.parts.map(part =>
        <p key = {part.id}>{part.name} {part.exercises}</p>
      )} */}
      {course.parts.map(part =>
        <Course part = {part}></Course>
      )}
      <Total></Total>
    </>
  )

}


const App = () => {

   
  const course = [{
    id : 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id : 1
      },
      {
        name: 'Using pros to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    id: 2,
    name: 'Node.js',
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
    
  }
]
  
  return (
    <div>
      
      <Header></Header>
      <Course course = {course[0]}></Course>
      <Course course = {course[1]}></Course>
    </div>

  )

}

export default App
