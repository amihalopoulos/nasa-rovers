import React, { Component, useState, useEffect } from "react";
import useFetch from './hooks';
import Navigation from './navigation'
import Filter from './filter'
import ImageCollection from './image-collection'

function Container(){
  // const [data, loading] = useFetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=YQv888J9gVeBN6TPQJqZ78ox127KhPQriWjNbYKa')
  // const [rovers, setRovers] = useState([])
  const [rovers, fetchingRovers] = useFetch('https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=YQv888J9gVeBN6TPQJqZ78ox127KhPQriWjNbYKa')
  const [selectedRover, setSelectedRover] = useState(false)
  const [filter, setFilter] = useState(false)

  function handleRoverSelect(rover){
    setSelectedRover(rover)
  }

  return (
    <div className="container">
    {
      fetchingRovers ? (
        "Loading..."
      ) : (
        <React.Fragment>
          <Navigation select={handleRoverSelect} selected={selectedRover ? selectedRover : rovers.rovers[0]} items={rovers.rovers} />
          <Filter filter={filter} setFilter={setFilter} />
          <ImageCollection rover={selectedRover ? selectedRover : rovers.rovers[0]}  />
        </React.Fragment>
      )
    }
    </div>
  )
}

export default Container;