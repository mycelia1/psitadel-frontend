import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import MissionStatement from './components/MissionStatement';
import ContactUs from './components/ContactUs';
import Events from './components/Events';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">My Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/mission">Mission Statement</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="C:\Users\johng\Documents\Psitadel\johnscitadelfrontendproject\frontend\src" component={Home} />
          <Route path="C:\Users\johng\Documents\Psitadel\johnscitadelfrontendproject\frontend\srcabout" component={AboutUs} />
          <Route path="C:\Users\johng\Documents\Psitadel\johnscitadelfrontendproject\frontend\srcmission" component={MissionStatement} />
          <Route path="C:\Users\johng\Documents\Psitadel\johnscitadelfrontendproject\frontend\srccontact" component={ContactUs} />
          <Route path="C:\Users\johng\Documents\Psitadel\johnscitadelfrontendproject\frontend\srcevents" component={Events} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
