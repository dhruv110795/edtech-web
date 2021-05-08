import React from "react";
import "../App.css";
import { Container, Col } from "reactstrap";
import Image1 from "../images/about-2.jpeg";
import Image2 from "../images/header-about-me.jpg";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default function About() {
  return (
    <div>
      <div className="about-header">
        <div
          className="bg-image"
          style={{ height: "500px", position: "relative" }}
        >
          <img src={Image2} style={{ maxWidth: "100%", height: "auto" }}></img>
        </div>
      </div>
      <div
        class="text-white"
        style={{
          position: "relative",
          background: "#10c9c3",
          display: "block",
          height: "100%",
          overflow: "hidden",
          zIndex: "1",
        }}
      >
        <div
          class="container"
          style={{ height: "200px", top: "70px", position: "relative" }}
        >
          <div class="row vertical-gap">
            <div class="col-md-6 col-lg-3">
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    position: "relative",
                    top: "14px",
                    paddingRight: "10px",
                  }}
                >
                  <WorkOutlineOutlinedIcon></WorkOutlineOutlinedIcon>
                </div>
                <div>
                  <div>548</div>
                  <div>Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    position: "relative",
                    top: "14px",
                    paddingRight: "10px",
                  }}
                >
                  <AccessTimeIcon></AccessTimeIcon>
                </div>
                <div>
                  <div>1465</div>
                  <div>Working Hours</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    position: "relative",
                    top: "14px",
                    paddingRight: "10px",
                  }}
                >
                  <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
                </div>
                <div>
                  <div>612</div>
                  <div>Positive Feedbacks</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    position: "relative",
                    top: "14px",
                    paddingRight: "10px",
                  }}
                >
                  <FavoriteBorderIcon></FavoriteBorderIcon>
                </div>
                <div>
                  <div>735</div>
                  <div>Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nk-gap-5 mnt-6"></div>
      </div>
      {/* Image and About me column */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                zIndex: "-1",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  zIndex: "-100",
                }}
              >
                <img
                  src={Image1}
                  style={{
                    backgroundPosition: "50% 50%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "759.6px",
                    height: "565.84px",
                    overflow: "hidden",
                    marginTop: "-65.92px",
                  }}
                ></img>
              </div>
            </div>
            <div style={{ height: "480px" }}></div>
          </div>
          <div className="col-lg-6" style={{ backgroundColor: "#f6f6f6;" }}>
            <div
              style={{ width: "80%", textAlign: "left", paddingTop: "70px" }}
            >
              <h2>About me</h2>
              <p>
                Given let waters air sea had you'll, may seed abundantly fish.
                Were, you'll earth forth winged above brought. Own darkness
                they're him can't fourth sea place have.
              </p>
              <p>
                So the above May stars cattle fruitful face shall. Tree it,
                winged. Every signs male firmament us. Morning him.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Need a Project for About */}
      <div className="bg-white text-center">
        <div className="mnb-12" style={{ height: "100px" }}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h2>Need a Project?</h2>
              <div className="mnt-15" style={{ height: "30px" }}></div>
              <p>
                Let us know what you're looking for in an agency. We'll take a
                look and see if this could be the start of something beautiful.
              </p>
              <div style={{ display: "block", height: "20px" }}></div>
              <button className="footer-np-button">Let's Talk</button>
            </div>
          </div>
          <div style={{ height: "160px" }}></div>
        </div>
      </div>
    </div>
  );
}
