import React, { useState, useEffect } from 'react';
import { Row, Col, Collapse } from 'reactstrap';
// import { Route, Switch, Redirect, Link } from 'react-router-dom';

export default function Main() {

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => toggleCollapse(), 6000);
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
            <span className="eGtwo">e</span>
            <span className="bangG">!</span>
          </Col>
        </Row>
        <Row className="my-name-is-container">
          <Col className="my-name-is">
            My name's <span className="mitch">Mitch</span>.
          </Col>
          <Collapse isOpen={isOpen}>
            <Col className="opening-msg text-center">
              I'm a California-based software developer with experience in React, Node.js, Express.js, and MongoDB.
            </Col>
          </Collapse>
        </Row>
        <Row>
          <Col className="downArrow bounce">
            <i class="fa fa-angle-down fa-3x"></i>
          </Col>
        </Row>
      
    </>
  );
}