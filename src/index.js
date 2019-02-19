import React, { Component, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import Navigation from './components/navigation'
import ImageCollection from './components/image-collection'
import { Context, initialState, reducer } from "./store";
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './index.scss'

const Index = () => {
  const [store, dispatch] = useReducer(reducer, initialState)

  async function fetchRovers(){
    dispatch({type: 'fetchingRovers'})
    const response = await axios.get(`${store.nasa_rovers_api}?api_key=${store.apiKey}`);
    dispatch({type: 'setRovers', rovers: response.data})
  }

  useEffect( () => {
    fetchRovers();
  }, []);

  return (
    <div className="container">
    {
      store.fetchingRovers ? (
        "Loading..."
      ) : (
        <Context.Provider value={{store, dispatch}}>
          <Navigation select={(rover) => dispatch({type: 'selectRover', rover})} selected={store.selectedRover} items={store.rovers.rovers} />
          <div className="filter">Filter by Date: <DatePicker selected={store.date} onSelect={(date) => dispatch({type: 'setDate', date})} /></div>
          <ImageCollection />
        </Context.Provider>
      )
    }
    </div>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"));