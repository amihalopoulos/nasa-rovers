import React, { Component, useState, useEffect } from "react";
import axios from 'axios'

const config = {}

function useFetch(url){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl(){
    const response = await axios.get(url, config);

    setData(response.data);
    setLoading(false);
  }

  useEffect( () => {
    fetchUrl();
  }, []);

  return [data, loading];
}

export default useFetch;