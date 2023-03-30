import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import MissionStatement from './components/MissionStatement';
import ContactUs from './components/ContactUs';
import Events from './components/Events';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://d1fdloi71mui9q.cloudfront.net/XPUdxzjqQj68mIXyTqvw_cML7Yw0n1WnLMrsG"
              height="200"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/mission">Mission Statement</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/mission" component={MissionStatement} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/events" component={Events} />
      </Switch>
    </Router>
  );
}

export default App;
