import React, { Component, useState, useEffect } from "react";
import useFetch from './hooks';

function Navigation(props){

  useEffect(() => {

  })

  return (
    <div className="navigation-wrapper">
      {props.items.map( item => <div key={item.name}>{ item.name }</div>)}
    </div>
  )
}

export default Navigation;