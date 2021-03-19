import React, { useReducer, useEffect } from "react";
import "./index.css";

//reducer only accepts action of type Gift, with a payload of the actual gift
function reducer(state, action) {
  switch (action.type) {
    case "GIFT":
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
      dispatch({ type: "GIFT", payload: data });
      console.log(gift);
    }
    getGifts();
  }, [id]);

  return (
    <div  className="gift-viewer">
      <ul>
        <li> {gift.person} </li>
        <li> {gift.giftname} </li>
        <li> {gift.giftlink} </li>
        <li> {gift.imagelink} </li>
      </ul>
    </div>
  );
}

export default GiftViewer;
