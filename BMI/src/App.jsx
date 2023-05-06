import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [message, setMessage] = useState()
  const [bmi, setBmi] = useState()

  const handleclick = () => {
    let val = (
      weight / (height * height)).toFixed(1)
    setBmi(val)
    if (val < 18.5) {
      setMessage("You are under-weight");
    }
    else if (val >= 18.5 && val < 24.9) {
      setMessage("You are healthy");
    }
    else if (val >= 24.9 && val < 30) {
      setMessage("You are over-weight");
    }
    else {
      setMessage("You are obese");
    }
  }

  useEffect(() => {
    handleclick();
  }, [height, weight]);


  return (
    <div>
      <h1>BMI Calculator</h1>
      <div className='box'>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input
            type='text'
            placeholder="Enter your name here" />
        </div>
        <div>
          <label>Age</label>
        </div>
        <div>
          <input
            type='text'
            placeholder="Enter your age here" />
        </div>
        <div>
          <label>Height</label>
        </div>
        <div>
          <input
            type='text'
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height in m" />
        </div>
        <div>
          <label>Weight</label>
        </div>
        <div>
          <input
            type='text'
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight in kg" />
        </div>
        {/* <button className='btn'
          onClick={handleclick}>
          Calculate
        </button> */}
        {(height && weight) ? (
          <>
            <h2>{bmi}</h2>
            <h2>{message}</h2>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default App
