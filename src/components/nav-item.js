import React, { Component, useState, useEffect } from "react";
import useFetch from './hooks';

function NavItem(props){

  useEffect(() => {

  })

  return (
    <div onClick={props.select} className={props.selected ? 'nav-item selected' : 'nav-item'}>
      {props.name}
    </div>
  )
}

export default NavItem;