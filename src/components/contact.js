import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const ContactUs = () => {
  return (
    <div className="container" style={{ paddingTop: "70px" }}>
      <div className="row vertical-gap">
        <div className="col-lg-5">
          <h2>Contact Info:</h2>
          <p>
            To give give beginning divide, cattle. Give moving won't, there
            the abundantly she'd she'd brought air upon. Light hath subdue.
            Life days creature upon first heaven gathering dry.
            </p>
          <ul style={{ listStyle: "none" }}>
            <li>
              <strong>Address:</strong> 10111 Santa Monica Boulevard, LA
              </li>
            <li>
              <strong>Phone:</strong> +44 987 065 908
              </li>
            <li>
              <strong>Email:</strong> info@Example.com
              </li>
            <li>
              <strong>Fax:</strong> +44 987 065 909
              </li>
          </ul>
        </div>
        <div className="col-lg-7">
          <form>
            <div
              className="row vertical-gap"
              style={{ marginBottom: "30px" }}
            >
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control required"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control required"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <input
              type="text"
              className="form-control required"
              name="title"
              placeholder="Your Title"
              style={{ marginBottom: "30px" }}
            />
            <textarea
              style={{ marginBottom: "30px" }}
              className="form-control required"
              name="message"
              rows="8"
              placeholder="Your Comment"
              aria-required="true"
            ></textarea>
            <button
              style={{ backgroundColor: "#10c9c3", marginBottom: "30px" }}
              className="footer-np-button"
            >
              Send Message
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

const GoogleMap = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe style={{ width: "100%", height: "550px" }}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <ContactUs />
      <GoogleMap />
    </>
  );
}
