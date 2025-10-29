import React from 'react'
import './Contact.css'
import ScrollToTop from '../ScrollToTop';





function Contact() {
    ScrollToTop();

    const [result, setResult] = React.useState("");
    const key = process.env.REACT_APP_FORM_KEY;

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", key);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


    return (

        <div className="Contact-content">
<div className='newsletterFormWrap'>
  <h4>Enter you email below to subscribe to my newsletter!</h4>
  <iframe title='subcribe form' src="https://embeds.beehiiv.com/76c36a76-389c-4734-a714-4f2f1ce8e07a?slim=true" data-test-id="beehiiv-embed" height="52" width="100%" frameborder="0" scrolling="no" style={{ margin: 0, borderRadius: '0px !important', backgroundColor: 'transparent' }}></iframe>

         </div>
 
         
         <h4>Please feel free to contact me if you have any queries, or would like any additional information about my work</h4>
            
            <form onSubmit={onSubmit}>
            <input type="checkbox" name="botcheck" class="hidden" style={{display: 'none'}} />
      <div className="form-group">
        <div className="input-group">
          <div className="form-group-half">
            <label htmlFor="fname" className="form-label">First Name</label>
            <input type="text" name="First name" id="fname" className="form-input top-input" />
          </div>
          <div className="form-group-half">
            <label htmlFor="lname" className="form-label">Last Name</label>
            <input type="text" name='Last name' id="lname" className="form-input top-input" /> 
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input type="email" name='Email' id="email" className="form-input" /> 
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Your Message</label>
        <textarea id="message" name='Message' className="form-textarea" rows="5"></textarea> 
      </div>

      <div className="form-group">
        <button type="submit" className="form-button">Send Message</button>
      </div>
    </form>
    <span>{result}</span>
    <p><b>EMAIL:</b> dianapage28@gmail.com</p>
    
    </div>
  );



}

export default Contact
