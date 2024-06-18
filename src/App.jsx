import { useState } from "react"

function App() {
  let [[bDay, bMonth, bYear], setDate] = useState([1,1,1])
  let [[diffDay, diffMonth, diffYear], setDiffDate] = useState([null, null, null])
  let [[errorDay, errorMonth, errorYear, errorReq], setError] = useState([null, null, null, null])

  function changeDay (e) {
      if(e.target.value === 29 && bMonth === 2 && bYear % 4 !== 0 && bYear % 400 !== 0) {
        setError((prevErrors) => {
          return [`${bYear} in not a leap year`, prevErrors[1], prevErrors[2], prevErrors[3]]
        })
      }
      else if (e.target.value > 30 && bMonth === 4) {
        setError((prevErrors) => {
          return ['Must be a valid day', prevErrors[1], prevErrors[2], prevErrors[3]]
        })
      }
      else if (e.target.value > 30 && bMonth === 6) {
        setError((prevErrors) => {
          return ['Must be a valid day', prevErrors[1], prevErrors[2], prevErrors[3]]
        })
      }
      else if (e.target.value > 30 && bMonth === 9) {
        setError((prevErrors) => {
          return ['Must be a valid day', prevErrors[1], prevErrors[2], prevErrors[3]]
        })
      }
      else if (e.target.value > 30 && bMonth === 11) {
        setError((prevErrors) => {
          return ['Must be a valid day', prevErrors[1], prevErrors[2], prevErrors[3]]
        })
      }
      else if(e.target.value < 1 || e.target.value > 31) {
        setError((prevErrors) => {
          return ['Must be a valid day', prevErrors[1], prevErrors[2], prevErrors[3]]
        })
      } else {
        console.log(e)
        setError((prevErrors) => {
          return [null, prevErrors[1], prevErrors[2], prevErrors[3]]
        })
      }
    
      setDate((prevDate) => {
        console.log('ok!')
        return [e.target.value, prevDate[1], prevDate[2]]
      })
  }

  function changeMonth (e) {
    
      setDate((prevDate) => {
        return [prevDate[0], e.target.value, prevDate[2]]
      })  
  }

  function changeYear (e) {
      setDate((prevDate) => {
        return [prevDate[0], prevDate[1], e.target.value]
      })
  }

  function calculateAgeDiff () {



    if(!errorDay && !errorMonth && !errorYear && !errorReq) {
      console.log(!errorDay && !errorMonth && !errorYear && !errorReq, [errorDay, errorMonth, errorYear, errorReq])
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
    }



    // const diffTime = Math.abs(currentDate - inputDate);
    // const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
    // console.log(diffTime + " milliseconds");
    // console.log(diffDays + " days");
  }

  return (
    <>
      Day
      <input type={'number'} value={bDay} onInput={changeDay} name={'day'}></input>
      {errorDay && <p>{errorDay}</p>}

      Month
      <input type={'number'} value={bMonth} onInput={changeMonth} name={'month'}></input>

      Year
      <input type={'number'} value={bYear} onInput={changeYear} name={'year'}></input>


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
