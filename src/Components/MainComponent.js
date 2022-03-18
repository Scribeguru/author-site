import React, { useState, useEffect } from 'react';
import { Row, Col, Collapse } from 'reactstrap';
// import { Route, Switch, Redirect, Link } from 'react-router-dom';

export default function Main() {

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => toggleCollapse(), 6000);
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    console.log('viewport width: ', vw, 'viewport height:', vh);
  }, [setOpen])

  function toggleCollapse() {
    setOpen(isOpen => isOpen = !isOpen);
  }

  return (
    <>
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
      <Row className="my-name-is-container text-center">
        <Col className="my-name-is text-nowrap">
          My name's <span className="mitch">Mitch</span>.
        </Col>
        <Collapse isOpen={isOpen}>
          <Col className="opening-msg text-center">
            <p>I'm a California-based software developer with experience in React, Node.js, Express.js, and MongoDB.</p>
            <Col>
              <a href="https://www.mongodb.com/" target="blank"><img className="hvr-backward mern-l img-fluid" src="/images/mongosymbol.png" alt="mongo icon" /></a>
            </Col>
            <Col>
              <a href="https://expressjs.com/" target="blank"><img className="hvr-forward mern-r img-fluid" src="/images/expresssymbol.png" alt="express icon" /></a>
          </Col>
          <Col>
            <a href="https://reactjs.org/" target="blank"><img className="hvr-backward mern-l img-fluid" src="/images/reactsymbol.png" alt="react icon" /></a>
        </Col>
        <Col>
          <a href="https://nodejs.org/en/" target="blank"><img className="hvr-forward mern-r img-fluid" src="/images/nodesymbol.png" alt="node icon" /></a>
      </Col>
    </Col>
        </Collapse >
      </Row >
    <div className="extra" />
    </>
  );
}