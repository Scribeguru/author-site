import React, { useState, useEffect } from 'react';
import { Row, Col, Collapse, Form, FormGroup, Label, Input, Button } from 'reactstrap';

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
          <a href="https://codepen.io/mitchellpoco/pens/public" target="_blank"><img src="/codepen.png" height="45px" width="205px" /></a>
        </Col>
        <Col xs="12">
          <a href="https://github.com/Scribeguru" target="_blank"><i className="social fa fa-github fa-3x" /></a>
        </Col>
        <Col xs="12" className="pb-1">
          <a href="https://www.linkedin.com/in/mitchellpoco/" target="_blank"><i className="social fa fa-linkedin fa-3x" /></a>
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
      <Row className="fat-top">
        <Col xs="12" className="my-name-is text-nowrap">
          My name's <span className="mitch">Mitch</span>.
        </Col>
        <Col className="img-intro">
          <Collapse isOpen={isOpen}>
            <Col className="img-bar text-center">
              <img className="on-bike img-fluid" src="/onbike1.PNG" alt="me on my motorbike" />
            </Col>
            <Col className="img-bar text-center">
              <img className="wearymobile img-fluid" src="/wearymobile.jpg" alt="Weary Muser mobile" />
            </Col>
            <Col className="img-bar text-center">
              <img className="rockstarmobile img-fluid" src="/rockstarmobile.jpg" alt="Rockstar Elite mobile" />
            </Col>
          </Collapse >
        </Col>
        <Col className="opening-msg">
          <p className="text-intro"><em>
            I'm a California-based software developer with experience in React, Node.js, Express.js, and MongoDB.
          </em></p>
          <Col>
            <a href="https://www.mongodb.com/" target="blank"><img className="mongos hvr-forward mern img-fluid" src="/mongosymbol.png" alt="mongo icon" /></a>
            <a href="https://expressjs.com/" target="blank"><img className="expresss hvr-forward mern img-fluid" src="/expresssymbol.png" alt="express icon" /></a>
            <a href="https://reactjs.org/" target="blank"><img className="reacts hvr-forward mern img-fluid" src="/reactsymbol.png" alt="react icon" /></a>
            <a href="https://nodejs.org/en/" target="blank"><img className="nodes hvr-forward mern img-fluid" src="/nodesymbol.png" alt="node icon" /></a>
          </Col>
          <Col xs="12" className="laptops text-center">
            <Col>
              <a href="https://wearymuser.com" className="title" target="_blank" data-replace="WearyMuser.com"><span>WearyMuser.com</span></a>
              <img src="/wearylaptop.jpg" onMouseEnter={e => e.target.src = "/wearygif1.gif"} onMouseLeave={e => e.target.src = "/wearylaptop.jpg"} className="img-fluid wearylaptop" alt="Weary Muser laptop" />
              <p className="wearydesc">Blog built with HTML5.</p>
            </Col>
            <Col>
              <a href="https://rockstarelite.xyz" className="title" target="_blank" data-replace="RockstarElite.xyz"><span>RockstarElite.xyz</span></a>
              <img src="/rockstarlaptop.jpg" onMouseEnter={e => e.target.src = "/rsegif1.gif"} onMouseLeave={e => e.target.src = "/rockstarlaptop.jpg"} className="img-fluid rockstarlaptop" alt="Rockstar Elite laptop" />
              <p className="rockstardesc">Personal workout assembling application built with MERN stack.</p>
            </Col>
          </Col>
        </Col>
      </Row>
      <div className="container-fluid">
        <Row className="aboutme mt-3">
          <Col>
            <p className="aboutmetext">
              <em>
                I create responsive, fully-featured web applications, and am constantly honing my skills.<br /><br /> I am available for remote or on-site, full or part-time employment, and freelance work.
              </em>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="img-fluid cert" src="/fullstackcert.png" />
          </Col>
        </Row>
      </div>
      <Row className="contact text-center mx-5">
        <Col xs="12">
          <b>Reach Out</b><hr />
        </Col>
        <Col className="mx-auto" sm="6">
          <Form action="https://formsubmit.co/pocomitch@gmail.com" method="POST" className="text-start">
            <FormGroup>
              <Label className="form-title" name="name" id="name">Name:</Label>
              <Input name="name" placeholder="Your Name" required></Input>
            </FormGroup>
            <FormGroup>
              <Label className="form-title" name="nameof" id="nameof">Email:</Label>
              <Input type="email" name="nameof" placeholder="Your Email"></Input>
            </FormGroup>
            <FormGroup>
              <Label className="form-title" name="message" id="message">Message:</Label>
              <Input type="textarea" rows="4" name="message" placeholder="Your Message"></Input>
              <Col className="text-end">
                <Button type="submit" className="btn-lg">Send</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </>
  );
}