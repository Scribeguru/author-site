import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Image, Collapse, Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Articles from './ArticleComponent';


export default function Blog(props) {

  return (
    <>
      <Container>
        <Row className='py-5 text-center'>
          <Col>
            <h1>
              {Articles()[props.currentArticle].title}
            </h1>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col xs='12'>
            <p>
              {Articles()[props.currentArticle].body}
            </p>
          </Col>
        </Row>
        {/* scrollTop */}
      </Container>
    </>
  );
}