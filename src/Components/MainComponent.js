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
              Mitchell Poco
            </Col>
            <Col className='in-brackets pb-1'>
              <span className='brackets'>&#40;</span>
              Freelance writer, nomadic motorcyclist, logophile<span style={{ fontFamily: 'Amatic SC, cursive', fontSize: '3.2em' }}>.</span>
              <span className='brackets'>&#41;</span>
            </Col>
          </Row>
          <Row className='mt-4'>
            <Col sm='7'>
              <Row className="my-5 navigation">
                <Col>
                  <u>Contact</u>
                </Col>
              </Row>
              <hr></hr>
              <Row className='mb-4 text-center'>
                <Col>
                  sds
                </Col>
                <Col>
                  dfdf
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