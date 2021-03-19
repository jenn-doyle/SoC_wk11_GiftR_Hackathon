import React from "react";
import Button from "./Button"
import GiftViewer from "./List";

function Main() {
function handleChange(id){
    console.log(id);
        return (
            <GiftViewer id={id}/>
        )
}

    return (
        <div>
        <h2>GIFTR suggestions</h2>
        <Button text ="Mum" handleChange={handleChange} id={1} />
        <Button text = "Dad" id={2}/>
        <Button text ="Brother" id={3}/>
        <Button text = "Sister"/>
        <Button text = "Grandpapa or Grandmama" />
        <Button text = "Friend"/>
        <Button text = "Partner"/>
        <Button text = "Person You Hate Deeply"/>
        <GiftViewer id={2}/>
        </div>
    )
}

export default Main;