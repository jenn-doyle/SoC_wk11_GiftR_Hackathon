import logo from "./GIFTR.png";
import css from "./contact.module.css";

function Contact() {
  return (
    <div>
      <h3>email : </h3>
      <h2>GIFTR@djchipmunks.co.uk</h2>
      <h3>phone : </h3>
      <h2>0121 554 4545 / 077021832384</h2>
      <br />
      <img
        className={css.logo}
        src={logo}
        width="650px"
        height="300px"
        alt="logo"
      />
    </div>
  );
}

export default Contact;
