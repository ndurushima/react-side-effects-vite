// Step 1: Accept `joke` and `loading` as props
import React, {useState, useEffect} from "react";

const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {/* Step 2: If `loading` is true, display "Loading..." */}
      {/* Step 3: Otherwise, display the joke */}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{joke}</p>
      )}
    </div>
  )
}

export default JokeDisplay
