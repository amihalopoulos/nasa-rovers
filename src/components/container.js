import React, { Component, useState, useEffect } from "react";
import useFetch from './hooks';

function Container(){
  const [data, loading] = useFetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=YQv888J9gVeBN6TPQJqZ78ox127KhPQriWjNbYKa')

  useEffect(() => {

  })

  return (
    <div className="container">
      <div>This is the container</div>
      <div>
        {loading ? (
          "Loading..."
        ) : ( 
          "retrieved"
        )}
      </div> 
    </div>
  )
}

export default Container;


// metrics:
//   1. # of videos that were processed
//     -date filter
//     -videos table or joblog table
//   2. # of customers
//     -company table
//   3. # of job positions
//   4. # of candidates
//     -date filter
//   5. list of active / recently active customers
//   6. most recent customer to signup

