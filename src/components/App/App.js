import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import Timer from '../Timer/Timer'
import Lots from '../Lots/Lots'

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <Lots />
        <Timer />
      </div>
    </div>
  )
}

export default App
