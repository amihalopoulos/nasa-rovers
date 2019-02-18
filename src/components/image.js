import React, { Component, useState, useEffect } from "react";

function Image(props){

  return (
    <div className="image-wrapper">
      <img src={props.image.img_src} />
      <div className="image-info-wrapper">
        <div className="image-info">
          <span className="image-info-label">id:</span> 
          <span className="image-info-value"> {props.image.id}</span>
        </div>
        <div className="image-info"> 
          <span className="image-info-label">earth date:</span> 
          <span className="image-info-value"> {props.image.earth_date}</span>
        </div>
        <div className="image-info">
          <span className="image-info-label">sol:</span> 
          <span className="image-info-value"> {props.image.sol}</span>
        </div>
        <div className="image-info">
          <span className="image-info-label">camera:</span> 
          <span className="image-info-value"> {props.image.camera.full_name}</span>
        </div>
      </div>
    </div>
  )
}

export default Image;