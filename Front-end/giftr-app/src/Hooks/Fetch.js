import {useEffect, useState} from "react";

const BACKEND_URL = "https:localhost:5001/gifts";

async function fetchData(){
    let result = await fetch(`${BACKEND_URL}`);
    let data = await result.json();
    setDataState(data);
}

useEffect(
    ()=>{fetchData();}, []
); 