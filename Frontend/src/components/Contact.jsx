import axios from 'axios';
import React, { useState } from 'react'
import {toast} from "react-toastify"
import ClipLoader from 'react-spinners/ClipLoader';
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const sendMail = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {data} = await axios.post(
        "http://localhost:4242/send/mail",
        {
          name,
          email,
          message,
        },
        {
          withCredentials: true,  
          headers: { "Content-Type": "application/json" },
        }
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
      setLoading(false);

    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  }
  return (
   <section className='contact'>
<form onSubmit={sendMail}>
  <h1>CONTACT US</h1>
  <div>
    <label >Name</label>
    <input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)}/>
  </div>
  <div>
    <label >Email</label>
    <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div>
    <label >Message</label>
    <input type="text" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}/>
  </div>
  <button   type='submit' disabled={loading} style={{display: "flex",
    justifyContent: "center",
    alignItems:"center",
    gap:"15px",
  }}>
    {loading && <ClipLoader size={20} color="white"/>}
     Send Message</button>
</form>
   </section>
  )
}

export default Contact


//timestamp 42.30