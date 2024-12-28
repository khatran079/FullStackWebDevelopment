import { useState, useEffect } from 'react'
import axios from 'axios'
import { use } from 'react'

function App() {
  // const [value, setValue] = useState('')
  // const [rate, setRates] = useState({})
  // const [currency, setCurrency] = useState(null)

  
  // useEffect(() => {
  //   console.log('effect run, currency is now', currency)

  //   if (currency) {
  //     console.log('fetching exchange rates...')
  //     axios
  //       .get(`https://open.er-api.com/v6/latest/${currency}`)
  //       .then(response => {
          
  //         setRates(response.data.rates)
  //       })
  //     }
  //   },[currency])
      
  // const handleChange = (event) => {
  //   setValue(event.target.value)
  //   // console.log(value)
  // }

  // const onSearch = (event) => {
  //   event.preventDefault()
  //   setCurrency(value)
    
  // }
  
  // return (
  //   <div>
  //     <form onSubmit={onSearch}>
  //       currency:<input value ={value} onChange={handleChange}/>
  //       <button type="submit">exchange rate</button>
  //     </form>
  //     <pre>
  //       {JSON.stringify(rate, null, 2)}
  //     </pre>
  //   </div>
  // )
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
 

  useEffect(() => {
    console.log('effect run, country is now', country)
    if(country)
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        console.log('promise fulfilled')
        
        // setCountries(response.data)
        let count = [];
        response.data.forEach(element => {
          if(element.name.common.toLowerCase().includes(country.toLowerCase())){
            count.push(element)
          }
        })
        
        setCountries(count.slice())
      
      .get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=385a3b565ed20a0eaddc31a7ad29a621')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        
      }) 
        
      })
  }, [country])
  const handleChange = (event) => {
    setCountry(event.target.value)
    console.log(country)
    confirm.log(response.data.length)
  }

  const handleClick = (country) => {
    setCountries([country])
  }

  return (
    <div>
      find country <input value = {country} onChange={handleChange} />
      {/* <pre>
      {JSON.stringify(countries, null, 2)}
      
      </pre> */}
      <Display countries={countries} handleClick={handleClick} onClick/>
    </div>
    
  )
}

const Display = ({countries,handleClick}) => {
  
 

  
    if (countries.length > 10) {
      return <div>Too many matches, specify another filter</div>
    }
    else if (countries.length > 1) {
      return (
        <div>
          {countries.map((country, index) => (
            <div key={index}>{country.name.common} <button onClick={() => handleClick(country)}>show</button></div>
          ))}
        </div>
      );
    }
    else if (countries.length === 1) {
      return (
        <div>
          <h2>{countries[0].name.common}</h2>
          capital {countries[0].capital} <br />
          area {countries[0].area}
          <div>
            <h4>languages</h4>
            <ul>
              {Object.values(countries[0].languages).map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
            <img style={{ width: '100px', height: '100px' }} src={countries[0].flags.png} alt="" />
            <h3>Weather in Helsinki</h3>
            <p>temperature: </p>
          </div>
        </div>
      );
    }
    else {
      return <div>No matches found</div>
    }
  
    
  
}
export default App
