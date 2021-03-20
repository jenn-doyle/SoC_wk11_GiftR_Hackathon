import React, { useReducer, useEffect } from "react";
import css from "./giftViewer.module.css";

//reducer only accepts action of type Gift, with a payload of the actual gift
function reducer(state, action) {
  switch (action.type) {
    case "GIFT":
      return action.payload;
    default:
      return state;
  }
}
const INITIAL_GIFT = {
  person: "",
  personCode: "",
  giftName: "",
  giftLink: "",
  imageLink: "",
};
const BACKEND_URL = "https:localhost:5001/gifts";

function GiftViewer({ id }) {
  const [gift, dispatch] = useReducer(reducer, INITIAL_GIFT);

  //fetches gift from API, and dispatches action of type gift, and payload of the actual gift
  useEffect(() => {
    async function getGifts() {
      let res = await fetch(`${BACKEND_URL}/${id}`); //id might be wrong
      let data = await res.json();
      console.log(data);
      dispatch({ type: "GIFT", payload: data });
      console.log(gift);
    }
    getGifts();
  }, [id]);

  if (!gift.imageLink) {
    return <h2>Select A Person...</h2>;
  }

  return (
    <div className={css.giftViewer}>
      <ul>
        <p className={css.text}>How About</p>
        <li> {gift.giftName} </li>
        <br />
        <li>
        </li>
        <br />
        <li>
          {" "}
          <a
            href={gift.giftLink}
            rel="noreferrer"
            target="_blank"
            style={{ color: "#3d7ea6" }}
          >
            Gift Website
          </a>{" "}
        </li>
        <br />
      </ul>
    </div>
  );
}

export default GiftViewer;
