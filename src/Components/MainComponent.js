import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Image, Collapse, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Nav from './NavComponent'
import Home from './HomeComponent';
import About from './AboutComponent';
import Blog from './BlogComponent';
import Footer from './FooterComponent';
import Articles from './ArticleComponent';
import { Route, Routes } from 'react-router-dom';

export default function Main() {

  const [currentArticle, setCurrentArticle] = useState(Math.floor(Math.random() * Articles().length));

  return (
    <>
      <Nav setCurrentArticle={setCurrentArticle} currentArticle={currentArticle} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rollthedice' element={<Blog
          currentArticle={currentArticle} />} />
      </Routes>
      <Footer />
    </>
  );
}