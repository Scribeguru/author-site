import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Image, Collapse, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import smoothscroll from 'smoothscroll-polyfill';
import Home from './HomeComponent';
import Blog from './BlogComponent';
import {Route, Routes} from 'react-router-dom';

export default function Main() {

  smoothscroll.polyfill();

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </>
  );
}