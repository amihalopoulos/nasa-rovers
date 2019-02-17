import React, { Component, useState, useEffect } from "react";
import useFetch from './hooks';
import Navigation from './navigation'
import Filter from './filter'
import ImageCollection from './image-collection'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Container(){
  // const [data, loading] = useFetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=YQv888J9gVeBN6TPQJqZ78ox127KhPQriWjNbYKa')
  // const [rovers, setRovers] = useState([])
  const [selectedRover, setSelectedRover] = useState(false)
  const [date, setDate] = useState(new Date())
  const url = `https://mars-photos.herokuapp.com/api/v1/rovers/`
  const [rovers, fetchingRovers] = useFetch(url) //https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=YQv888J9gVeBN6TPQJqZ78ox127KhPQriWjNbYKa


  function handleRoverSelect(rover){
    setSelectedRover(rover)
  }

  function formatDate(date){
    console.log(date)
    return date.toISOString().substr(0,10)
  }

  function selectDate(newDate){
    console.log('hello this is selecting the date')
    console.log(formatDate(newDate))
    setDate(newDate)
  }

  return (
    <div className="container">
    {
      fetchingRovers ? (
        "Loading..."
      ) : (
        <React.Fragment>
          <Navigation select={handleRoverSelect} selected={selectedRover ? selectedRover : rovers.rovers[0]} items={rovers.rovers} />
          Filter by Date: <DatePicker selected={date} onSelect={selectDate} />
          <ImageCollection rover={selectedRover ? selectedRover : rovers.rovers[0] } date={formatDate(date)} />
        </React.Fragment>
      )
    }
    </div>
  )
}

export default Container;