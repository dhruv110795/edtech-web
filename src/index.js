import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Home from './components/home';
import About from './components/about';
import Contact from "./components/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col } from "reactstrap";

import PolymerOutlinedIcon from '@material-ui/icons/PolymerOutlined';


const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand"><PolymerOutlinedIcon></PolymerOutlinedIcon></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link"><Link to="/">Home</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><Link to="/about">About</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><Link to="/contact">Contact</Link></a>
          </li>
        </ul>
      </div>
    </nav>

  )
}

const Footer = () => {
  {/* Footer Element for About */ }
  return (
    <footer className="footer-class">
      <Container>
        <div className="row vertical-row" style={{ marginTop: "-30px" }}>
          <div className="col-lg-5">
            <h3 className="h5 mb-20">Piroll Design, Inc.</h3>
            <p className="mb-0">© 2017 Piroll. All rights reserved.</p>
          </div>
          <div className="col-lg-3">
            <p> hello@pirolltheme.com </p>
            <p> +44 987 065 908 </p>
          </div>
          <div className="col-lg-2">
            <div className="footer-href">
              <ul>
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Services</a>
                </li>
                <li>
                  <a>Career</a>
                </li>
              </ul>
              <ul style={{ marginLeft: "50px" }}>
                <li>
                  <a>News</a>
                </li>
                <li>
                  <a>Events</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a>Legals</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-1">
            <div className="footer-href">
              <ul>
                <li>
                  <a>Facebook</a>
                </li>
                <li>
                  <a>Twitter</a>
                </li>
                <li>
                  <a>Instagram</a>
                </li>
                <li>
                  <a>Dribbble</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
