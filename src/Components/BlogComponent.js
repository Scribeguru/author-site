import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Image, Collapse, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Blog() {

  return (
    <>
      <Row>
        <Col className='maincontainer'>
          <Row>
            <Col lg='6' className='name'>
              Mitchell L.J. Poco
            </Col>
            <Col lg='6' className='in-brackets pt-3'>
              <Row>
                <Col className='pt-3'>You're in my blog!</Col>
              </Row>
            </Col>
            {/* <Col className='pt-5' style={{opacity: '0.25'}}>
              Book coming soon!
            </Col> */}
          </Row>
          <Row className='mt-4'>
            <Col sm='7'>
            <Row className="mt-4 navigation">
                {/* <Col>
                  <u>Books</u>
                </Col> */}
                <Col>
                  <Link to='/'><u>Home</u></Link>
                </Col>
                <Col>
                  <Link to='/blog'><u>Archive</u></Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs='12' id='about' className='rates text-center mb-2 pt-4'>
              <span id='postTitle'></span>
              <br />
              <br />
              <p className='about'>
                I wouldn't say I love writing, it's more like a nasty infection I haven't been able to shake. It occupies such an enormous chunk of my psyche that I've conceded the worldly contribution I'm responsible for making can only scale to its maximum potential while I'm tapping on keys or scratching away with a pen. That being the case, and another substantial swath of my interests being ruled by nomadism and my relationship with my motorcycle — I've resolved to write at your behest while I cruise North America.
              </p>
            </Col>
          </Row>
        </Col>
      </Row >
      <footer className='text-center'>
        © Copyright 2022, Mitchell L.J. Poco. All Rights Reserved
      </footer>
    </>
  )
}