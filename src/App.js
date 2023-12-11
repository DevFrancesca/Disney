import React from 'react'
import Head from './components/Header'
import ConditionalRendering from './components/ConditionalRendering'
import './App.css'
const App = () => {
  return (
    <div className='Body'>
      <Head/>
      <ConditionalRendering/>
    </div>
  )
}

export default App
