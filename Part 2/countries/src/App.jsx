import { useState, useEffect } from 'react'
import searchEngine from './services/searchEngine'
import Filter from './components/Filter'
import ListCountries from './components/ListCountries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [showState, setShowState] = useState('')
  const [searchCountry, setSearch] = useState('')

  useEffect(() => {
    console.log('fetching all countries...')
    searchEngine
        .getAll()
        .then (response => {
          setCountries(response)
        })    
  }, [])

  const filterCountries = 
                          searchCountry === '' ? countries : countries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()))

  const onSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleShowButton = (countrySelector) => {
    setShowState(countrySelector)
  }

  // {JSON.stringify(countryInfo, null, 2)} 

  console.log(countries);
  console.log(filterCountries);
  
  return (
    <div>
        <Filter value={searchCountry} onChange={onSearch} placeholder={'Search a country'}  />
      <pre>
        
        <ListCountries land = {filterCountries} clickHandler = {handleShowButton} showLand = {showState}  />
      </pre>
    </div>
  )
}

export default App