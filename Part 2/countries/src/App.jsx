import { useState, useEffect } from 'react'
import searchEngine from './services/searchEngine'
import Filter from './components/Filter'
import ListCountries from './components/ListCountries'

const App = () => {
  const [countries, setcountries] = useState([])
  //const [countryInfo, setCountryInfo] = useState('')
  const [searchCountry, setSearch] = useState('')

  useEffect(() => {
    console.log('fetching all countries...')
    searchEngine
        .getAll()
        .then (response => {
          setcountries(response)
        })    
  }, [])

  const filterCountries = 
                          searchCountry === '' ? countries : countries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()))

  const onSearch = (event) => {
    setSearch(event.target.value)
  }

  // {JSON.stringify(countryInfo, null, 2)} 

  console.log(countries);
  console.log(filterCountries);
  
  return (
    <div>
        <Filter value={searchCountry} onChange={onSearch} placeholder={'Search a country'}  />
      <pre>
        
        <ListCountries land={filterCountries} />
      </pre>
    </div>
  )
}

export default App