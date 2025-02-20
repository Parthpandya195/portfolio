import React from "react";
import "./Contact.css";
import gmailimg from "../../assets/images/gmail.png"
import callimg from "../../assets/images/contact-information.png"
import locationimg from "../../assets/images/placeholder.png"
function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4f577693-73a0-4e01-8732-a89a7185cee7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("succuess input ")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <div className="contact" id="contact">
        <div className="conatct-title">
          <h1>Get In Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I Am Curruntly Available to join you and alsways ready to craft something new</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={gmailimg} alt="" />
                    <p>pandyaparth158@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={callimg} alt="" />

                    <p>+91 9016056286</p>
                    </div>
                    <div className="contact-detail">
                    <img src={locationimg} alt="" />
                    <p>Surat Gujrat India</p>

                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter Your Name" name="name" />
                <label htmlFor="">Your E-mail</label>
                <input type="email" placeholder="Enter Your Emial" name="email" />
                <label htmlFor="">Write your Message Here</label>
                <textarea name="message" rows={8} placeholder="Enter your Message Here"></textarea>
                <button type="submit" className="contact-submit">Submit Now   </button>

            </form>
            <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
