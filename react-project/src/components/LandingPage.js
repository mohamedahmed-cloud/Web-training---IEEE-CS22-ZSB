import React from 'react'
import logo from '../img/quiz.png'

export default function LandingPage(props) {


  return (
    <div className="flex-wrapper">
      <div className="content">
        <img src={logo} alt="quizzical logo" className="quizzical-logo" />
        <h1>Quizzical</h1>
        <p> Test your knowledge! When you start the quiz, you will have to answer 5 random questions. Good luck!</p>
        <button className="quizzical-button" onClick={props.onStart}> Start quiz!</button>
      </div>
    </div>
  )
}