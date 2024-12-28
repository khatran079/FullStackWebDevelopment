import { useState, useEffect} from 'react'
import axios from 'axios'
import personService from './services/person'

function App() {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [searchName, setSearchName] = useState('')
  const [messageNotification, setMessageNotification] = useState('notification')

  useEffect(() =>{
    
    personService
      .getAll()
      .then(initialNames => {
        // console.log(initialNames)
        setPersons(initialNames)
      })

  },[])
  const handleAddName = (event) => {
    setNewName(event.target.value)
  }

  const handleAddNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilter = (event) => {
    
    const inputValue = event.target.value;
    setSearchName(inputValue);
  
    if (inputValue === "") {
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  
    console.log(inputValue);
  }

  const checkExisted = () => {
    return persons.some(person => person.name === newName);
  }
  const addName = (event) => {
    event.preventDefault()
    // console.log(checkExisted())
    if(checkExisted()){
      const confirmChange = window.confirm(`${newName} is already added to phone book, replace the old number with a new one?`)
      // window.alert(`${newName} is already added to phone book`)
      if(confirmChange){
        const person = persons.find(p => p.name === newName)
        const updatePerson = {...person, number: newNumber};
        personService
          .updateNumber(person.id, updatePerson)
          .then(returnedPerson => {
            
            setPersons(persons.map(p => p.id === person.id? returnedPerson:p))
            setNewName('')
            setNewNumber('')
            
            
            
            // setTimeout(() => { setMessage(null), 5000 })
            
             
          }
          
        )
      }
      else{
        setNewName('')
        setNewNumber('')
      }
    }
    else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(nameObject)
        .then(returnedName => {
          // console.log(returnedName)
          setPersons(persons.concat(returnedName))
          setNewName('')
          setNewNumber('')
          setMessageNotification(`Added ${returnedName.name}`)
          setTimeout(() => {setMessageNotification(null)}, 5000)
        })
      

      
    }
  }

  const delPerson = id =>{
   
    const person = persons.find(p => p.id === id)
    const isConfirmed = window.confirm("Delete " + person.name + " ?")

    if (isConfirmed) {
    personService
      
      .deletePerson(id)
      .then (returnedPerson => {
      setPersons(persons.filter(person => person.id != returnedPerson.id))})
      .catch(error => {
        setMessageNotification(`Information of ${person.name} has already been removed from server`)
        setTimeout(() => {setMessageNotification(null)}, 5000)
        setPersons(persons.filter(p => p.id !== id))
      })
    
    }
    
    else {
      alert("Action canceled.")
    }
  }
  

 
  
  //filter name
  const searchN = showAll
    ? persons
    : persons.filter(person => person.name.split(' ')[0].toLowerCase() === searchName.toLowerCase() )

  
 

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {messageNotification}></Notification>
      <Filter onChange= {handleNameFilter}></Filter>

      <h3>Add a new</h3>
      <PersonForm onSubmit={addName} onChangeName={handleAddName} onChangeNumber={handleAddNumber} newName={newName} newNumber={newNumber}></PersonForm>
      
      <h3>Numbers</h3>
      <Persons searchN = {searchN} delPerson={delPerson} ></Persons>
      
    </div>
  )
}

const Notification = ({message}) => {
  if (message === null){
    return null
  }
  return(
    <div className="notification">
      {message}
    </div>
  )
}

const Filter = ({onChange}) => {
  return(
    <p>filter shown with <input type="text" onChange={onChange}/></p>
  )
}

const PersonForm = ({onSubmit, onChangeName, onChangeNumber,newName, newNumber}) => {
  return(
    <form onSubmit={onSubmit}>
        <div>
          name: <input type="text" value = {newName} onChange = {onChangeName}/>
        </div>
        <div>
          number: <input type="text" value = {newNumber} onChange = {onChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
  )
}



const Persons = ({searchN, delPerson}) =>{
  
  const Name = ({person}) => {
    return(
      <div key= {person.name} >
        {person.name} {person.number} <button onClick={ () => delPerson(person.id)}>delete</button>
      </div>
    )
  }
  return(
    <>
      {searchN.map(person => <Name person={person} key = {person.name} ></Name>)}
    </>
  )
}
export default App
