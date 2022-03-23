import React, { useState, useEffect } from 'react';
import { Row, Col, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
// import { Route, Switch, Redirect, Link } from 'react-router-dom';

export default function Main() {

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => toggleCollapse(), 4700);
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    console.log('viewport width: ', vw, 'viewport height:', vh);
  }, [setOpen])

  function toggleCollapse() {
    setOpen(isOpen => isOpen = !isOpen);
  }

  return (
    <>
      <Row className="nav-container container-fluid pt-4">
        <Col xs="12" className="social">
          <a className="social-h" href="https://codepen.io/mitchellpoco/pens/public" target="_blank"><img src="/images/codepen.png" height="45px" width="205px" /></a>
        </Col>
        <Col xs="12"  className="social">
          <a className="social-h" href="https://github.com/Scribeguru" target="_blank"><i className="social fa fa-github fa-3x" /></a>
        </Col>
        <Col xs="12"  className="social">
          <a className="social-h" href="https://www.linkedin.com/in/mitchellpoco/" target="_blank"><i className="social fa fa-linkedin fa-3x" /></a>
        </Col>
      </Row>
      <Row className="hi-there-container">
        <Col className="hi-there">
          <span className="hG">H</span>
          <span className="iG">i </span>
          <span className="tG">t</span>
          <span className="hGtwo">h</span>
          <span className="eG">e</span>
          <span className="rG">r</span>
          <span className="eGtwo">e </span>
          <span className="bangG">!</span>
        </Col>
      </Row>
      <Row>
        <Col xs="12" className="my-name-is text-nowrap">
          My name's <span className="mitch">Mitch</span>.
        </Col>
        <Col className="img-intro">
          <Collapse isOpen={isOpen}>
            <Col className="img-bar text-center">
              <img className="on-bike img-fluid" src="/images/onbike1.PNG" alt="me on my motorbike" />
            </Col>
            <Col className="img-bar text-center">
              <img className="wearymobile img-fluid" src="/images/wearymobile.jpg" alt="Weary Muser mobile" />
            </Col>
            <Col className="img-bar text-center">
              <img className="rockstarmobile img-fluid" src="/images/rockstarmobile.jpg" alt="Rockstar Elite mobile" />
            </Col>
          </Collapse >
        </Col>
        <Col className="opening-msg">
          <p className="text-intro"><em>
            I'm a California-based software developer with experience in React, Node.js, Express.js, and MongoDB.
          </em></p>
          <Col>
            <a href="https://www.mongodb.com/" target="blank"><img className="mongos hvr-forward mern img-fluid" src="/images/mongosymbol.png" alt="mongo icon" /></a>
            <a href="https://expressjs.com/" target="blank"><img className="expresss hvr-forward mern img-fluid" src="/images/expresssymbol.png" alt="express icon" /></a>
            <a href="https://reactjs.org/" target="blank"><img className="reacts hvr-forward mern img-fluid" src="/images/reactsymbol.png" alt="react icon" /></a>
            <a href="https://nodejs.org/en/" target="blank"><img className="nodes hvr-forward mern img-fluid" src="/images/nodesymbol.png" alt="node icon" /></a>
          </Col>
        </Col>
      </Row>
      <div className="extra" />
    </>
  );
}