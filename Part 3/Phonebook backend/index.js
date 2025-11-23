// initialise Express
const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  const length = persons.length
  const dateNow = new Date()
  response.send(`
    <p>Phonebook has info for ${length} people</p>
    <p>${dateNow}</p>
  `)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const contact = persons.find(contact => contact.id === id)

    if (contact) {
        response.json(contact)
    } else {
        response.status(404).end()
    }   
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => Number(n.id)))
    : 0
  return String(Math.floor(Math.random() * (maxId + 1) * 10))
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    const existingPerson = persons.find(person => person.name === body.name)

    // if the name is already in the phonebook, respond with: 400 bad request

    if(existingPerson) {
      return response.status(400).json({
        error: "Contact already in phonebook. Name must be unique"
      })
    }
    // if the received data has no name or number property, respond with: 400 bad request

    if (!body.name || !body.number) {
      return response.status(400).json({
        error: "Vital contact info missing"
      })
    }

    const contact = {
      name: body.name,
      number: body.number,
      id: generateId()
    }

    console.log(contact)
    persons = persons.concat(contact)
    response.json(contact)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(contact => contact.id !== id)

    response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
