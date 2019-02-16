import React, { Component, useState, useEffect } from "react";
import useFetch from './hooks';

function Image(props){

  useEffect(() => {

  })

  return (
    <div className="image-wrapper">
      <img src={props.src} />
    </div>
  )
}

export default Image;