import "../styles/Contact.css";
import footimg from "../img/download (1).png" ;
import ingressive from "../img/images (2).png";
import { useState } from "react";

export default function () {
  const [message, setMessage] = useState('');

  const evChangeMessage = event => setMessage(event.target.value)

  return (
    <div className="container">

    
    <div className="contact">
      <form>
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <div className="fullName">
          <div>
            <label for="name">First name</label>
            <input type="text" id='first_name' placeholder="  Enter your first name" />
          </div>
          <div className='nd'>
            <label for="name">Last name</label>
            <input type="text" id='last_name' placeholder="  Enter your last name" />
          </div>
        </div>
        <label for="email">Email</label>
        <input type="email" id='email' placeholder="  yourname@email.com" />
        <label for="text" className="message">Message</label>
        <textarea name="result" placeholder="Send me a message and i'll reply you as soon as possible..." id='message' value={message} onChange={evChangeMessage}></textarea>
        {message.length === 0 && <div className="error">
          <p>Please enter a message</p>
        </div>}
        <input type="checkbox" />
        
        You agree to providing your data to Damilola who may contact you.
        <input type="submit" value="Send message" id='btn_submit'/>
        
      </form>
          </div>
          <footer>
        <img src= {footimg} alt="" />
        <span>HNG Internship 9 Frontend Task </span>

        <img src= {ingressive} alt="" className="ingressive" />
      </footer>

    </div>
  );
}
