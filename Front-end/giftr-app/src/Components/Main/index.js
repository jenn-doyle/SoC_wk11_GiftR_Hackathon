import { useState } from "react";
import Button from "./Button";
import GiftViewer from "./GiftViewer";
import lamb from "./lamb.png";

function Main() {
  const [img, setImg] = useState();
  const [id, setId] = useState();

  function handleChange(id) {
    setId(id);
    setImg();
  }

  function showImage() {
    let image = lamb;
    setImg(image);
    setId();
  }

  return (
    <div>
      <h2>GIFTR suggestions</h2>
      <Button
        text="Mum"
        handleChange={() => {
          handleChange(1);
        }}
      />
      <Button
        text="Dad"
        handleChange={() => {
          handleChange(2);
        }}
      />
      <Button
        text="Sister"
        handleChange={() => {
          handleChange(3);
        }}
      />
      <Button
        text="Brother"
        handleChange={() => {
          handleChange(4);
        }}
      />
      <Button
        text="Grandparents"
        handleChange={() => {
          handleChange(5);
        }}
      />
      <Button
        text="Friend"
        handleChange={() => {
          handleChange(6);
        }}
      />
      <Button
        text="Partner"
        handleChange={() => {
          handleChange(8);
        }}
      />
      <Button text="Person You Hate Deeply" handleChange={showImage} />

      <img src={img} width="900px" alt=""/>
      <GiftViewer id={id} />
    </div>
  );
}

export default Main;
