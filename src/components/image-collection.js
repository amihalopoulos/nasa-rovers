import React, { Component, useState, useEffect } from "react";
import useFetch from './hooks';
import Image from './image';
import axios from 'axios'

function ImageCollection(props){

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // useFetch pass in url and callback?

  async function fetchUrl(){
    setLoading(true);

    const response = await axios.get(`https://mars-photos.herokuapp.com/api/v1/rovers/${props.rover.name}/photos?earth_date=${props.date}`);
    // const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${props.rover.name}/photos?earth_date=2018-1-10&api_key=YQv888J9gVeBN6TPQJqZ78ox127KhPQriWjNbYKa`);

    setImages(response.data);
    setLoading(false);
  }

  useEffect( () => {
    console.log('image collection effect')

    fetchUrl();
  }, [props.rover.id, props.date]);

  return (
    <div className="image-collection-wrapper">
      { loading ? (
        <div>Fetching images {props.rover.name} images...</div>
      ) : (
         images.photos.length ? (
          <div className="image-collection">
          { images.photos.map( image => <Image key={image.id} src={image.img_src} earthDate={image.earth_date} sol={image.sol} /> ) }
          </div>
        ) : (
          <div>No images from {props.rover.name} rover on this day</div>
        )
        
      )}
    </div>
  )
}

export default ImageCollection;