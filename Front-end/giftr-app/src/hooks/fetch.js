import React, { useReducer, useEffect } from 'react';
import './index.css';

//reducer only accepts action of type Gift, with a payload of the actual gift
function reducer(state, action) {
  switch (action.type) {
    case 'GIFT':
      return action.payload;
    default:
      return state;
  }
}

const BACKEND_URL = "https:localhost:5001/gifts";

function GiftViewer({ id }) {
  const [gift, dispatch] = useReducer(reducer, null);

  //fetches gift from API, and dispatches action of type gift, and payload of the actual gift
  useEffect(() => {
    async function getGifts() {
      let res = await fetch(`${BACKEND_URL}/${id}`); //id might be wrong
      let data = await res.json();
      dispatch({ type: 'GIFT', payload: data });
      console.log(gift);
    }
    getGifts();
  }, [id]);

  return (
    <div className="gift-viewer">
      <p>{gift}</p>
    </div>
  );
}

export default GiftViewer;


// import { useEffect, useState } from "react";

// function useFetch() {
//   const [dataState, setDataState] = useState(1);
//  
//   const BACKEND_URL = "https:localhost:5001/gifts";

//   async function fetchData() {
//     let result = await fetch(`${BACKEND_URL}`);
//     let data = await result.json();
//     setDataState(data);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return dataState;
// }

// export default useFetch;
