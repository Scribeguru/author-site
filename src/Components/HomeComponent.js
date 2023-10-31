import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Image, Collapse, Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <>
      <Container>
        <Row className='py-5 text-center'>
          <Col>
            <h1>
              A Vivid Exhibition of Contemplative Philosophy.
            </h1>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col xs='12'>
            <span>☛ </span><Link target='_blank' to='https://google.com' ><em>Available where you buy books</em></Link><span> ☜</span>
          </Col>
          <Col className='mt-1 py-3 mb-5 book'>
            <img className='bookImg img-fluid' src='./mockup.jpg' />
          </Col>
        </Row>
        <Row className=' text-center mt-1 py-3 mb-5'>
          <Col>
            
          </Col>
        </Row>
      </Container >
    </>
  );
}