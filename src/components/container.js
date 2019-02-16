import React, { Component, useState, useEffect } from "react";
import useFetch from './hooks';
import Navigation from './navigation'
import Filter from './filter'
import ImageCollection from './image-collection'

function Container(){
  // const [data, loading] = useFetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=YQv888J9gVeBN6TPQJqZ78ox127KhPQriWjNbYKa')
  const [rovers, roverLoading] = useFetch('https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=YQv888J9gVeBN6TPQJqZ78ox127KhPQriWjNbYKa')
  useEffect(() => {

  })

  return (
    <div className="container">
    {
      !roverLoading && (
        <React.Fragment>
          <Navigation items={rovers.rovers} />
          <Filter />
          <ImageCollection />
        </React.Fragment>
      )
    }


      <div>
       {/* {loading ? (
          "Loading..."
        ) : ( 
          "retrieved"
        )} */}
      </div> 
    </div>
  )
}

export default Container;