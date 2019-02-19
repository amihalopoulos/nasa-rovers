import React from "react";

export const initialState = { 
  rovers: [],
  fetchingRovers: true,
  selectedRover: false,
  fetchingImages: true,
  images: [],
  date: new Date(),
  apiKey: 'YQv888J9gVeBN6TPQJqZ78ox127KhPQriWjNbYKa',
  nasa_rovers_api: 'https://api.nasa.gov/mars-photos/api/v1/rovers/'
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "selectRover":
      return { ...state, selectedRover: action.rover }
    case "setDate":
      return { ...state, date: action.date }
    case 'fetchingRovers':
      return { ...state, fetchingRovers: true};
    case "setRovers":
      return { ...state, fetchingRovers: false , rovers: action.rovers, selectedRover: action.rovers.rovers[0]};
    case 'fetchingImages':
      return { ...state, fetchingImages: true};
    case "setImages":
      return { ...state, fetchingImages: false , images: action.images};
    default:
      return state;
  }
};

export const Context = React.createContext();