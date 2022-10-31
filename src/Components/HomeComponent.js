import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Image, Collapse, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Blog from './BlogComponent';
import { Link } from 'react-router-dom';

export default function Home() {

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
                <Col className='pt-3'>Your optimal solution for high quality freelance writing.</Col>
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
                  <a href='#rates'><u>Rates</u></a>
                </Col>
                <Col>
                  <a href='#contact'><u>Contact</u></a>
                </Col>
                <Col>
                  <a href='#about'><u>About</u></a>
                </Col>
                <Col>
                  <Link to='/blog'><u>Blog</u></Link>
                </Col>
              </Row>
              <Row className='mb-3 text-center'>
                <Col xs='12' className='text-start intro'>
                  <hr />
                  <p>
                    Have a mass of untempered emotional energy you need transformed into a succinct, appealing mass of words? Raw data needs to be professionally conveyed in an unbiased, detail oriented article? Or perhaps something socially poignant isn't getting the attention it deserves, and writing the blog post to do it justice is further afield than your time or energy will allow.
                    <br />
                    <br />
                    Whatever the case — <span className='highlight-container'><span className='highlight'>I'm here to help.</span></span> Check out some of my work below.
                  </p>
                  <hr />
                </Col>
                <Col sm='4' className='mb-5 sample'>
                  <Col>
                    <a href='/Onsite at La Quinta’s X Park Grand Opening.pdf' target='_blank'><img src='/xpark.png' className='img-fluid sample-img'></img></a>
                  </Col>
                  <Col>
                    Report on the grand opening of the largest skatepark in the Coachella Valley.
                  </Col>
                </Col>
                <Col sm='4' className='mb-5 sample'>
                  <Col>
                    <a href='https://wearymuser.com' target='_blank'><img src='/wearyport.png' className='img-fluid sample-img'></img></a>
                  </Col>
                  <Col>
                    Another blog of mine.
                  </Col>
                </Col>
                <Col sm='4' className='mb-5 sample'>
                  <Col>
                    <img src='/ktogig1.png' className='img-fluid sample-img'></img>
                  </Col>
                  <Col>
                    Social media post description for a Halloween party.
                  </Col>
                </Col>
                {/* <Col sm='4' className='mb-5 sample'>
                  Thumbnail image with title.
                </Col>
                <Col sm='4' className='mb-5 sample'>
                  Thumbnail image with title.
                </Col>
                <Col sm='4' className='mb-5 sample'>
                  Thumbnail image with title.
                </Col> */}
                <hr id='rates' />
                <Col xs='12' className='rates mb-5 pt-4'>
                  My Rates.
                  <br />
                  <br />
                  <ul>
                    <li>
                      <span style={{ fontSize: '.9em', fontStyle: 'italic' }}>1 - 100 words:&nbsp;&nbsp;</span>
                      $6 flat rate
                    </li>
                    <br />
                    <li>
                      <span style={{ fontSize: '.9em', fontStyle: 'italic' }}>100-315 words:&nbsp;&nbsp;</span>
                      ¢6 per word
                    </li>
                    <br />
                    <li>
                      <span style={{ fontSize: '.9em', fontStyle: 'italic' }}>315+ words:&nbsp;&nbsp; </span>
                      $19 per hour <span style={{ fontStyle: 'italic', textDecoration: 'underline' }}>or </span><br />¢6 per word
                    </li>
                  </ul>
                </Col>
                <Col xs='12' id='contact' className='contact py-4 mb-5'>
                  Get in touch.
                  <br />
                  <br />
                  <form action="https://formsubmit.co/mitchpoco@mitchpo.co" method="POST" className="text-start">
                    <div className="mb-3">
                      <label name="name" id="name" className="form-title form-label">Name:</label>
                      <input name="name" required="" type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label name="nameof" id="nameof" className="form-title form-label">Email:</label>
                      <input name="nameof" required="" type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label name="message" id="message" className="form-title form-label">A brief overview of the piece you'd like done:</label>
                      <textarea rows="4" name="message" required="" className="form-control">
                      </textarea>
                      <div className="text-end col">
                        <br />
                        <button type="submit" className="btn-lg btn btn-light">Send</button>
                      </div>
                    </div>
                  </form>
                  <span style={{ fontSize: '.8em' }}>I'll be back to you within 24 hours.</span>
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
                <img src='/onbike1.jpg' className='img-fluid img-1'></img>
              </Col>
              <Col>
                <img src='/legsout.jpg' className='img-fluid img-1'></img>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col xs='12' id='about' className='rates text-center mb-2 pt-4'>
              Some details about me.
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
  );
}