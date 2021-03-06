import React from "react";
import css from "./about.module.css";

function About() {
  return (
    <div>
      <h2 className={css.heading}>ABOUT US</h2>
      <p className={css.p}>
        GIFTR is a leading search engine of gifts for you and your family.{" "}
      </p>
      <p className={css.p}>
        We are dedicated to ensuring that your family have the latest and most
        innovative personal gifts.{" "}
      </p>
      <p className={css.p}>
        Our extensive range of products spans luxury gift sets to inexpensive
        items. They are suitable for all requirements from birthdays,
        festivities or anniversaries.{" "}
      </p>
      <p className={css.p}>
        GIFTR is committed to our customers satisfaction, and we want to ensure
        that your family have the perfect gift.
      </p>
    </div>
  );
}

export default About;
