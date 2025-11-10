import { useState } from 'react'
import contactService from './services/contacts'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import { useEffect } from 'react'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const hook = () => {
    console.log('effect')
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)       
      })    
  }

  useEffect(hook, [])


  const addContact = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number : newNumber
    }

    const existingPerson = persons.find(person => person.name === newName)

    if (!existingPerson) {
      contactService
        .create(personObject)
        .then(returnedContact => {
          setPersons(persons.concat(returnedContact))
          setNewName('')
          setNewNumber('')
      })
      
    } else {
      if ((window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`))) {
        const changedNumber = { ...existingPerson, number: newNumber }
        contactService
          .update(existingPerson.id, changedNumber)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id === existingPerson.id ? returnedPerson: person))
          })
      }
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

  const removeContact = id => {
    const contact = persons.find(cont => cont.id === id ) 

    if (window.confirm(`Delete ${contact.name} ?`)) {
      contactService
        .removeContact(id)
        setPersons(persons.filter(n => n.id !== id))
       
    } else {
      console.log(`Contact ${contact.name} not deleted`)      
    }
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.trim().toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>

        <Filter value = {search} onChange={handleSearchChange} placeholder = {'Type to search...'} />

      <h2>add a new contact</h2>

      <PersonForm 
        onSubmit = {addContact}

        value = {newName}
        onChange = {handleNameChange}
        placeholder = 'Add a new person...'

        valueNumber = {newNumber}
        onChangeNumber = {handleNumberChange}
        placeholderNumber = 'Add the number...'
      
      />

      <h2>Numbers</h2>

          {filteredPersons.map(person =>
              <Person key = {person.id} name = {person.name} number = {person.number} onClick={() => removeContact(person.id)} />
          )
          }
         
    </div>
  )
}

export default App