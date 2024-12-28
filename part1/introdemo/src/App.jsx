import Note from "./components/Note"
import { useState, useEffect } from "react"
import axios  from "axios"
import noteService from './services/notes'








const App = (props) => {
  const [notes,setNotes] = useState([]) //React re-render when state change
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happend...')


  //hook is inside of the first parameter
  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])


  const notesToShow = showAll
    ? notes 
    : notes.filter(note => note.important)

  const addNote = (event) => {
    event.preventDefault() //prevents the browser
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}
    
    noteService
    
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id === id ? returnedNote : note))
      })
      .catch(error => {
        setErrorMessage(`Note '${note.content}' was already removed from server`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter( n => n.id !== id))
      }
      )
  }
  

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
    console.log(newNote)
  }
  return (
    <div>
      <h1>Notes</h1>
      <Notification message = {errorMessage}></Notification>
      <div>
        <button type="button" onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key = {note.id} note = {note} toggleImportant={() =>toggleImportanceOf(note.id)}></Note>
        )}
      </ul>
      <form onSubmit={addNote} >
        <input value = {newNote} onChange={handleNoteChange}/>
        <button type ="onSubmit" >save</button>
      </form>

      <Footer></Footer>
    </div>
  )
}

const Notification = ({message}) => {
  if(message === null) {
    return null
  }

  return (
    <div className='error'>
      {message}
    </div>
  )
}


const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2024</em>
    </div>
  )
}



export default App