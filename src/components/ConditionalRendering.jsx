import React from 'react'
import Hero from './Hero'
import Card from './Card'
import Database from './raw.json'

const ConditionalRendering = () => {
  return (
    <div>
      <Hero/>
      <Card arr ={Database}/>
    </div>
  )
}

export default ConditionalRendering
