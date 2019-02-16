import React, { Component, useState, useEffect } from "react";
import useFetch from './hooks';
import Image from './image';

function ImageCollection(){

  useEffect(() => {

  })

  return (
    <div className="image-collection-wrapper">
      collection of images
      <Image />
    </div>
  )
}

export default ImageCollection;