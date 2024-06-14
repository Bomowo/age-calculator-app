import { useState } from "react"

function App() {
  let [[day, month, year], setDate] = useState([1,1,1])

  function changeDay (e) {
    console.log(e.target.value)
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


  return (
    <>
      Day
      <input type={'number'} min={1} max={31} value={day} onInput={changeDay}></input>

      Month
      <input type={'number'} min={1} max={12} value={month} onInput={changeMonth}></input>

      Year
      <input type={'number'} min={1} max={2024} value={year} onInput={changeYear}></input>

      -- years
      -- months
      -- days

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Bomowo">Bomowo</a>.
      </div>
    </>
  )
}

export default App
