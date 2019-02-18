import React, { Component, useState, useEffect } from "react";

function NavItem(props){

  return (
    <div onClick={props.select} className={props.selected ? 'nav-item selected' : 'nav-item'}>
      {props.name}
    </div>
  )
}

export default NavItem;