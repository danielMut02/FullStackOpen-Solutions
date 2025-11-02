import { useState } from 'react'

const Display = ({title}) => <h1>{title}</h1>

const Button = ({onClick, text}) => <button onClick = {onClick}>{text}</button>

const StatisticLine = ({text, value, text1}) => (
  <tr>
    <td>{text}</td>
    <td>{value} {text1}</td>
  </tr>
)

const Statistics = (props) => {
  if (props.total === 0) return <p>No feedback given</p>

  return (
  <table>
      <StatisticLine text = "good" value = {props.valueGood} text1 = "" /> 
      <StatisticLine text = "neutral" value = {props.valueNeutral} text1 = "" />
      <StatisticLine text = "bad" value = {props.valueBad} text1 = "" />
      <StatisticLine text = "all" value = {props.valueTotal} text1 = "" />
      <StatisticLine text = "average" value = {props.valueAverage} text1 = "" />
      <StatisticLine text = "positive" value = {props.valuePositive} text1 = {"%"} />
  </table>
  )
}

const App = () => {
  const titles = ["give feedback", "statistics"]
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [result, setResult] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleClickGood = () => {
    const updatedGood = good + 1
    const updatedTotal = updatedGood + neutral + bad 
    const updatedAverage = updatedTotal === 0 ? 0 : (updatedGood - bad) / updatedTotal
    const updatedPositive = (updatedGood / updatedTotal) * 100
    setGood(updatedGood)
    setTotal(updatedTotal) 
    setResult(updatedAverage)
    setPositive(updatedPositive)
  }

  const handleClickNeutral = () => {
    const updatedNeutral = neutral + 1
    const updatedTotal = good + updatedNeutral + bad 
    const updatedPositive = (good / updatedTotal) * 100
    setNeutral(updatedNeutral)
    setTotal(updatedTotal)
    setPositive(updatedPositive)
  }

  const handleClickBad = () => {
    const updatedBad = bad + 1
    const updatedTotal = good + neutral + updatedBad 
    const updatedAverage = updatedTotal === 0 ? 0 : (good - updatedBad) / updatedTotal
    const updatedPositive = (good / updatedTotal) * 100
    setBad(updatedBad)
    setTotal(updatedTotal)
    setResult(updatedAverage)
    setPositive(updatedPositive)
  }

  const setZero = () => {
    setGood(0)
    setBad(0)
    setNeutral(0)
    setTotal(0)
    setResult(0)
    setPositive(0)
  }

  return (
    <div>
      <Display title = {titles[0]} />
      <Button onClick={handleClickGood} text = {"good"} />
      <Button onClick={handleClickNeutral} text = {"neutral"} />
      <Button onClick={handleClickBad} text = {"bad"} />
      <Display title = {titles[1]} />
      <Statistics total = {total}
                  valueGood = {good}
                  valueNeutral = {neutral}
                  valueBad = {bad}
                  valueTotal = {total}
                  valueAverage = {result}
                  valuePositive = {positive}
      />
      <Button onClick={setZero} text={"reset"} />
    </div>
  )
}

export default App