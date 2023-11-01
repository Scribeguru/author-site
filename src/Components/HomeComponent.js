import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Image, Collapse, Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <>
      <Container className='foundation'>
        <Row className='py-5 text-center'>
          <Col>
            <h1>
              <span className='hook'>A Striking Exhibition of Contemplative Philosophy</span>.
            </h1>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col xs='12' className='buyLink'>
            <span className='hand'>☛ </span><Link target='_blank' to='https://google.com' className='available' ><em>Available where you buy books</em></Link><span className='hand'> ☜</span>
          </Col>
          <Col className='mt-1 pt-3 mb-4 book'>
            <img className='bookImg img-fluid' src='./mockup.jpg' />
          </Col>
        </Row>
        <Row className='blurb text-center py-3 my-4 pb-5'>
          <Col xs='12' className='mb-4'>
            sdfdsf <em><b>Dancing Through the Labyrinth</b></em> is a fire ass piece,<br /> yadayada.sdsdsdsdsdsds.
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className='shortAbout'>
            <h2 className='my-5 pt-2'><b>Hi, I'm Mitchell.</b></h2>
            Hello! this part is all about me, but not as much about me as the about page. Maybe I'll put a redirect to the about page here, too! But then that would be a lot of buttons. I'll probably just leave the decision to scroll back up to learn about me in your hands since that way this page will remain uncluttered and you'll be forced to reencounter the buy link if you didn't already use it to get a copy of my kickass book.
          </Col>
        </Row>
      </Container >
    </>
  );
}