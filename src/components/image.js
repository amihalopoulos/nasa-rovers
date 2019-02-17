import React, { Component, useState, useEffect } from "react";
import useFetch from './hooks';

function Image(props){

  useEffect(() => {

  })

  return (
    <div className="image-wrapper">
      <img src={props.src} />
      <div className="image-overlay">
        <div>earth date: {props.earthDate}</div>
        <div>sol: {props.sol}</div>
      </div>
    </div>
  )
}

export default Image;