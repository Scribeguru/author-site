import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Collapse, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import smoothscroll from 'smoothscroll-polyfill';

export default function Main() {

  smoothscroll.polyfill();

  return (
    <>
      <Row>
        <Col className='maincontainer'>
          <Row>
            <Col md='4' className='name pt-2'>
              Mitchell L.J. Poco
            </Col>
            <Col lg='6' className='in-brackets pb-1'>
              <span className='brackets'>&#40;</span>
              Freelance writer, nomad biker, <span className='logophile'><a href='https://www.google.com/search?client=firefox-b-1-d&q=logophile' target='_blank'>logophile</a></span><span style={{ fontFamily: 'Amatic SC, cursive', fontSize: '3.2em' }}>.</span>
              <span className='brackets'>&#41;</span>
            </Col>
            {/* <Col className='pt-5' style={{opacity: '0.25'}}>
              Book coming soon!
            </Col> */}
          </Row>
          <Row className='mt-4'>
            <Col sm='7'>
              <Row className="my-5 navigation text-center">
                {/* <Col>
                  <u>Books</u>
                </Col> */}
                <Col>
                  <a href='/contact'><u className='contact'>Fancy something written?</u></a>
                </Col>
              </Row>
              <Row className='mb-4 text-center'>
                <Col xs='12' className='mb-5 text-start'>
                  <hr></hr>
                  <p>
                    I'm a motorbike-bestridden alchemist transmuting language into gasoline.
                    <br></br>
                    <br></br>
                    Have a mass of untempered emotional energy you need transformed into a succinct, appealing mass of words? Raw data needs to be professionally conveyed in an unbiased, detail oriented article? Or perhaps something socially poignant isn't getting the attention it deserves, and writing the blog post to do it justice is further afield than your time or energy will allow.
                    <br></br>
                    <br></br>
                    Whatever the case — I'm here to help. Check out some of my work below.
                  </p>
                  <hr></hr>
                </Col>
                <Col sm='4' className='mb-5'>
                  Thumbnail image with title.
                </Col>
                <Col sm='4' className='mb-5'>
                  Thumbnail image with title.
                </Col>
                <Col sm='4' className='mb-5'>
                  Thumbnail image with title.
                </Col>
                <Col sm='4' className='mb-5'>
                  Thumbnail image with title.
                </Col>
                <Col sm='4' className='mb-5'>
                  Thumbnail image with title.
                </Col>
                <Col sm='4' className='mb-5'>
                  Thumbnail image with title.
                </Col>
              </Row>
            </Col>
            <Col>
              <Col>
                <img src='/mebelow.jpg' className='img-fluid img-1'></img>
              </Col>
              <Col>
                <img src='/memed.jpg' className='img-fluid img-1'></img>
              </Col>
              <Col>
                <img src='/legsout.jpg' className='img-fluid img-1'></img>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}