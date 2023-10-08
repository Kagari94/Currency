import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import axios from 'axios' 

const API = "KEY HERE"
const URL = "https://api.freecurrencyapi.com/v1/latest?apikey="+API

function App() {
  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [rate, setRate] = useState(0);

  const convert = (e) => {
    e.preventDefault()
    axios.get(URL).then((response) => {
      const json = response.data
      setRate(json.data.GBP)
      setGbp(eur * json.data.GBP)

    }).catch(error => {
      alert(error)
    })

  }

  return (
    <div id="container">
      <form onSubmit={convert}>
        <div>
          <label>EUR</label>&nbsp;
          <input type="number" step="0.01" value={eur} onChange={e => setEur(e.target.value)}/>
          <output> {rate}</output> 
        </div>
        <div>
          <label>Gbp</label>
          <output> {gbp.toFixed(2)}</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
