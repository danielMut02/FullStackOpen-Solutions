import { useState } from 'react'

const Display = ({title}) => <h1>{title}</h1>

const Button = ({onClick, text}) => <button onClick = {onClick}>{text}</button>

const Stat = ({text, value}) => <p>{text} {value}</p> 

const App = () => {
  const titles = ["give feedback", "statistics"]
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    console.log("good before", good)
    const updatedGood = good + 1
    setGood(updatedGood)
    console.log("good after", updatedGood)
  }

  const handleClickNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }
  const handleClickBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)  
  }

  const setZero = () => {
    setGood(0)
    setBad(0)
    setNeutral(0)
  }


  return (
    <div>
      <Display title = {titles[0]} />
      <Button onClick={handleClickGood} text = {"good"} />
      <Button onClick={handleClickNeutral} text = {"neutral"} />
      <Button onClick={handleClickBad} text = {"bad"} />
      <Display title = {titles[1]} />
      <Stat text={"good"} value={good} />
      <Stat text={"neutral"} value={neutral} />
      <Stat text={"bad"} value={bad} />
      <Button onClick={setZero} text={"reset"} />
    </div>
  )
}

export default App