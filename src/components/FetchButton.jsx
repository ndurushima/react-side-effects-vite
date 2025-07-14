// Step 1: Accept `fetchJoke` as a prop
import React, {useState, useEffect} from "react"


const FetchButton = ({ fetchJoke }) => {
  return (
    // Step 2: Add an onClick event that calls `fetchJoke`
    <button className="fetch-button" onClick={fetchJoke}>Get a New Joke</button>
  )
}

export default FetchButton
