import React, { Component, useState, useEffect } from "react";
import Image from './image';
import axios from 'axios';
import localForage from 'localForage';

function ImageCollection(props){

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl(){
    setLoading(true);
    const roverDateKey = props.rover.name + '-' + props.date
    let response = await localForage.getItem(roverDateKey);

    if (!response) {
      const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${props.rover.name}/photos?earth_date=2018-1-10&api_key=YQv888J9gVeBN6TPQJqZ78ox127KhPQriWjNbYKa`);
      setImages(response.data);
      await localForage.setItem(roverDateKey, response.data)
    } else {
      setImages(response);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchUrl();
  }, [props.rover.id, props.date]);

  return (
    <div className="image-collection-wrapper">
      { loading ? (
        <div>Fetching images {props.rover.name} images...</div>
      ) : (
         images.photos.length ? (
          <div className="image-collection">
          { images.photos.map( image => <Image key={image.id} image={image} /> ) }
          </div>
        ) : (
          <div>No images from the {props.rover.name} rover on this day. Pick another day!</div>
        )
        
      )}
    </div>
  )
}

export default ImageCollection;