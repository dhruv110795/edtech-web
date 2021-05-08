import React from "react"
import Home1 from "../images/home.jpeg"

const FirstComponent = () => {
  return (
    <div className="App">
      <div className="row vertical-gap" style={{ marginRight: "0px" }}>
        <div className="col-md-7">
          <div className="bg-image" style={{ height: "500px", position: "relative" }}>
            <img src={Home1} className="image-class"></img>
          </div>
        </div>
        <div className="col-md-5" style={{ paddingTop: "70px" }}>
          <h1>We Design and Develop</h1>
          <p className="lead">We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps.</p>
          <button className="footer-np-button">Contact Us</button>
        </div>
      </div>
    </div>
  )
}

const SecondComponent = () => {
  return (
    <div className="bg-white" style={{
      position: "relative",
      display: "block",
      height: "100 %",
      overflow: "hidden",
      zIndex: "1",
    }}>
      <div className="container">
        <div className="row vertical-gap" style={{ paddingBottom: "45px" }}>
          <div className="col-md-6 col-lg-3 home-padding-top">
            <div className="home-text-center">
              <div>
                <div className="home-text-title">UI / UX Design</div>
                <div>Be set fourth land god darkness make it wherein own</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 home-padding-top">
            <div className="home-text-center">
              <div>
                <div className="home-text-title">Web Development</div>
                <div>A she'd them bring void moving third she'd kind fill</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 home-padding-top">
            <div className="home-text-center">
              <div>
                <div className="home-text-title">App / Mobile</div>
                <div>Dominion man second spirit he, earth they're creeping</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 home-padding-top">
            <div className="home-text-center">
              <div>
                <div className="home-text-title">Game Design</div>
                <div>Morning his saying moveth it multiply appear life be</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 home-padding-top">
            <div className="home-text-center">
              <div>
                <div className="home-text-title">SEO / Marketing</div>
                <div>Give won't after land fill creeping meat you, may</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 home-padding-top">
            <div className="home-text-center">
              <div>
                <div className="home-text-title">Photography</div>
                <div>Creepeth one seas cattle grass give moving saw give</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 home-padding-top">
            <div className="home-text-center">
              <div>
                <div className="home-text-title">Graphic Design</div>
                <div>Open, great whales air rule for, fourth life whales</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 home-padding-top">
            <div className="home-text-center">
              <div>
                <div className="home-text-title">Illustrations</div>
                <div>Whales likeness hath, man kind for them air two won't</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

const ThirdComponent = () => {
  return (
    <div className="" style={{
      position: "relative",
      display: "block",
      height: "100 %",
      overflow: "hidden",
      zIndex: "1",
      backgroundColor: '#10c9c3'
    }}>
      <div className="container-fluid">
        <div className="col-md-12 col-lg-12" style={{ margin: "10% 0" }}>
          <blockquote className="text-white home-blockquote">
            <p>Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.</p>
            <span><i>Michael Hopkins</i></span>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </>
  );
}

export default Home;
