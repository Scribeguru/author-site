import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Image, Collapse, Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Articles from './ArticleComponent';


export default function Blog(props) {

  const [arrow, setArrow] = useState(<img className='img-fluid scrollTop' src='./uparrowfilled.png' />)

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Container className='foundation'>
        <Row className='py-5 text-center'>
          <Col>
            <h1>
            <span dangerouslySetInnerHTML={{__html: Articles()[props.currentArticle].title}} />
            </h1>
          </Col>
        </Row>
        <Row className='blogBody'>
          <Col>
            <span dangerouslySetInnerHTML={{__html: Articles()[props.currentArticle].body}} />
          </Col>
        </Row>
        <Row className='text-center my-5'>
          <Col>
            <Link onClick={() => scrollToTop()} onMouseEnter={() => setArrow(<img className='img-fluid scrollTop' src='./uparrow.png' />)} onMouseLeave={() => setArrow(<img className='img-fluid scrollTop' src='./uparrowfilled.png' />)}>{arrow}</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}