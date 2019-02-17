import React, { Component, useState, useEffect } from "react";
import useFetch from './hooks';
import NavItem from './nav-item';

function Navigation(props){

  useEffect(() => {
console.log('navigation effect')
  })

  return (
    <div className="navigation-wrapper">
      {props.items.map( item => <NavItem selected={props.selected.id === item.id} name={item.name} key={item.name} select={() => props.select(item)} /> )}
    </div>
  )
}

export default Navigation;