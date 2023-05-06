import Axios from 'axios'
import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import './App.css'

function App() {

  const [search, setSearch] = useState('')
  const [crypto, setCrypto] = useState([])

  useEffect(() => {
    Axios.get(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR`
    ).then((res) => {
      setCrypto(res.data.coins)
    })
  }, [])

  return (
    <div className="App">
      <Typography variant="h2">All Cryptocurrencies</Typography>
      <input
        type='text'
        placeholder='Search here...'
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
      <hr />
      <table>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Market Cap</td>
            <td>Price</td>
            <td>Available Supply</td>
            <td>Volume(24hrs)</td>
          </tr>
        </thead>
        <tbody>
          {crypto
            .filter((val) => {
              return val.name.toLowerCase().includes(search.toLowerCase())
            })
            .map((val, id) => {
              return (
                <>
                  <tr>
                    <td>{val.rank}</td>
                    <td className="logo">
                      <a href={val.websiteUrl}>
                        <img src={val.icon} alt="logo" width="30px" />
                      </a>
                      <p>{val.name}</p>
                    </td>
                    <td>{val.symbol}</td>
                    <td>₹{val.marketCap}</td>
                    <td>₹{val.price.toFixed(2)}</td>
                    <td>{val.availableSupply}</td>
                    <td>{val.volume}</td>
                  </tr>
                </>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default App