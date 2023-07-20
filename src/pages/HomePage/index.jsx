import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
    <h1>Welcome to our pokemon app!</h1>
    <Link to="/pokedex">See the pokemon here</Link>
    </>
  )
}
