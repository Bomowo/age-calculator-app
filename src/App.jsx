import { useState } from "react"

function App() {
  let [[bDay, bMonth, bYear], setDate] = useState([1,1,1])
  let [[diffDay, diffMonth, diffYear], setDiffDate] = useState([null, null, null])

  function changeDay (e) {
    if((e.target.value <= 31 && e.target.value>=1)  || e.target.value === '') {
      setDate((prevDate) => {
        return [e.target.value, prevDate[1], prevDate[2]]
      })
    }
  }

  function changeMonth (e) {
    if((e.target.value <= 12 && e.target.value >= 1) || e.target.value === '') {
      setDate((prevDate) => {
        return [prevDate[0], e.target.value, prevDate[2]]
      })
    }
  }

  function changeYear (e) {
    if((e.target.value <= 2024 && e.target.value >= 1) || e.target.value === '') {
      setDate((prevDate) => {
        return [prevDate[0], prevDate[1], e.target.value]
      })
    }
  }

  function calculateAgeDiff () {
    let currentDate = new Date()
    let inputDate = new Date()

    inputDate.setFullYear(bYear)
    inputDate.setMonth(bMonth)
    inputDate.setDate(bDay)
    
    let dateDiff = Math.abs(currentDate - inputDate)

    let dateDiffYear = Math.floor(dateDiff / 31556952000)
    dateDiff = dateDiff - (dateDiffYear * 31556952000)
    let dateDiffMonth = Math.floor(dateDiff / 2629746000)
    dateDiff = dateDiff - (dateDiffMonth * 2629746000)
    let dateDiffDay = Math.floor(dateDiff / 86400000)

    setDiffDate([dateDiffDay, dateDiffMonth, dateDiffYear])


    // const diffTime = Math.abs(currentDate - inputDate);
    // const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
    // console.log(diffTime + " milliseconds");
    // console.log(diffDays + " days");
  }

  return (
    <>
      Day
      <input type={'number'} min={1} max={31} value={bDay} onInput={changeDay}></input>

      Month
      <input type={'number'} min={1} max={12} value={bMonth} onInput={changeMonth}></input>

      Year
      <input type={'number'} min={1} max={2024} value={bYear} onInput={changeYear}></input>


      <button onClick={calculateAgeDiff}>Submit</button>
      {diffYear && diffYear} years
      {diffMonth && diffMonth} months
      {diffDay && diffDay} days

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Bomowo">Bomowo</a>.
      </div>
    </>
  )
}

export default App
