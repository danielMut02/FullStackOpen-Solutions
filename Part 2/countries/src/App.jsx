import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {
  const [value, setValue] = useState('')
  const [countryInfo, setCountryInfo] = useState({})
  const [searchCountry, setSearch] = useState(null)

  useEffect(() => {
    console.log('effect run, name is now', searchCountry)

    // skip if currency is not defined
    if (searchCountry) {
      console.log('fetching names...')
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${searchCountry}`)
        .then(response => {
          setCountryInfo(response.data.name)
        })
    }
  }, [searchCountry])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  return (
    <div>
        Country: <input value={searchCountry} onChange={onSearch} />
      <pre>
        {JSON.stringify(countryInfo, null, 2)}
        
        <Country name={countryInfo.official} />

      </pre>
    </div>
  )
}

export default App