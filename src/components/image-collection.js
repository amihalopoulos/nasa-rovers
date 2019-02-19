import React, { Component, useEffect, useContext } from "react";
import Image from './image';
import axios from 'axios';
import localForage from 'localForage';
import { Context } from "../store";
import moment from 'moment';

function ImageCollection(){
  const { store, dispatch } = useContext(Context)
  
  function formatDate(date){
    return moment(date).format('YYYY-MM-DD')
  }

  async function fetchImages(){
    dispatch({type: 'fetchingImages'});
    const roverDateKey = store.selectedRover.name + '-' + formatDate(store.date)
    let response = await localForage.getItem(roverDateKey);

    if (!response) {
      response = await axios.get(`${store.nasa_rovers_api}${store.selectedRover.name}/photos?earth_date=${formatDate(store.date)}&api_key=${store.apiKey}`);
      response = response.data;
      await localForage.setItem(roverDateKey, response)
    }
  
    dispatch({type: 'setImages', images: response})
  }

  useEffect( () => {
    fetchImages();
  }, [store.selectedRover.id, store.date]);

  return (
    <div className="image-collection-wrapper">
      { store.fetchingImages ? (
        <div>Fetching {store.selectedRover.name} photos...</div>
      ) : (
         store.images.photos.length ? (
          <div className="image-collection">
          { store.images.photos.map( image => <Image key={image.id} image={image} /> ) }
          </div>
        ) : (
          <div>No images from the {store.selectedRover.name} rover on this day. Pick another day!</div>
        )
        
      )}
    </div>
  )
}

export default ImageCollection;