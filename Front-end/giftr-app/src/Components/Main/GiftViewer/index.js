import React, { useReducer, useEffect } from "react";

//reducer only accepts action of type Gift, with a payload of the actual gift
function reducer(gift, action) {
  switch (action.type) {
    case "GIFT":
      return action.payload;
    default:
      return gift;
  }
}
const INITIAL_GIFT = {
    person: "",
    personCode: "",
    giftName: "",
    giftLink: "",
    imageLink: ""
}
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

  return (
    <div  className="gift-viewer">
      <ul>
        <li> {gift.person} </li>
        <li> {gift.giftName} </li>
<<<<<<< HEAD:Front-end/giftr-app/src/Components/Main/GiftViewer/index.js
        <li> <a href={gift.giftLink} target="_blank">Gift Website</a>  </li>
=======
        
>>>>>>> ef87dead21e3801548714f50ea592a7c3c3c1e5f:Front-end/giftr-app/src/Components/Main/List/index.js
        <li> 
            <img src={gift.imageLink} alt="gift" width="500px" height ="500px"/> 
        </li>
        <li> 
        <a href={gift.giftLink}>Gift Website</a> 
          </li>
      </ul>
    </div>
  );
}

export default GiftViewer;
