import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>RICOH THETA Development </title>
      <Link to="/about">About</Link>
      <h1>RICOH THETA X Development Getting Started </h1>
      <p>Short tutorials using Flutter and HTTP to access RICOH THETA APIs</p>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage