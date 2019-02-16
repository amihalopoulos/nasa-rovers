import React, { Component, useState, useEffect } from "react";
import useFetch from './hooks';
import Image from './image';
import axios from 'axios'

function ImageCollection(props){

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl(){
    const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${props.rover.name}/photos?earth_date=2018-1-10&api_key=YQv888J9gVeBN6TPQJqZ78ox127KhPQriWjNbYKa`);
    console.log('fetchie fetchie')
console.log(response)
    setImages(response.data);
    setLoading(false);
  }

  useEffect( () => {
    fetchUrl();
  }, [props.rover.id]);

  return (
    <div className="image-collection-wrapper">
      collection of images for: {props.rover.name}
      { loading ? (
        <div>Loading images for: {props.rover.name}</div>
      ) : (
         images.photos.length ? (
          images.photos.map( image => <Image key={image.id} src={image.img_src} /> )
        ) : (
          <div>No images from {props.rover.name} rover on this day</div>
        )
        
      )}
    </div>
  )
}

export default ImageCollection;