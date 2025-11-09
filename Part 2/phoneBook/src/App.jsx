import { useState } from 'react'
import Person from './components/Person'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-123456', 
      id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number : newNumber,
      id : persons.length + 1
    }

    const existingPerson = persons.find(person => person.name === newName)

    if (!existingPerson) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {  
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.trim().toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>

        filter shown with <input  
              value = {search}
              onChange = {handleSearchChange}
              placeholder='type to filter...'
          />

      <h2>add a new contact</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
            placeholder='Add a new person...'
            />
        </div>
        <div>
          number: <input 
            value = {newNumber}
            onChange = {handleNumberChange}
            placeholder='Add a new number...'
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {filteredPersons.map(person =>
          <Person key = {person.id} name = {person.name} number = {person.number} />
        )}
    </div>
  )
}

export default App