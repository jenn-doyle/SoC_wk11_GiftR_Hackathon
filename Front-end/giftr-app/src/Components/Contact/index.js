import logo from "./GIFTR.png";
import css from  "./contact.module.css";

function Contact() {
  return (
    <div>
      <h2>GIFTR@djchipmunks.co.uk</h2>
      <br />
      <img className={css.logo} src={logo} width="700px" height="400px" alt="logo" />
    </div>
  );
}

export default Contact;
