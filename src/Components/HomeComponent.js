import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Image, Collapse, Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Home() {

  const [arrow, setArrow] = useState(<img className='img-fluid scrollTop' src='./uparrowfilled.png' />)

  useEffect(() => {
    setTimeout(function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
          <Col xs='12' className='buyLink mb-5'>
            <span className='hand'>☛ </span><u><Link target='_blank' to='https://google.com' className='available' ><em>Available where you buy books</em></Link></u><span className='hand'> ☜</span>
          </Col>
          <Col className='mt-1 mb-4 book'>
            {/* <img className='bookImg img-fluid' src='./mockup.png' /> */}
            <div class="book-container-654583a8a1213d004a934fc8">
              <div class="book">
                <img alt="Dancing Through the Labyrinth" src="https://res.cloudinary.com/dwkwbtgqh/image/upload/v1699054722/file_o3sfnw_fmjpd3.png" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className='blurb text-center py-3 my-4 pb-5'>
          <Col xs='12' className='mb-4'>
            Minted from the pressure of America's elements, <em><b><u><Link to='/books'>Dancing Through the Labyrinth</Link></u></b></em>
            <br />masterfully extricates existential gold from the very limits of language.
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className='shortAbout'>
            <h2 className='my-5 pt-2'><b>Hello, I'm Mitchell </b>—</h2>
            and infinitely grateful you've deemed this visit to my website a worthy expenditure of your time.<br /><br />Among the contents here, you can find a number of things I've written, <em><u><Link to='/contact'>the means to get in touch with me</Link></u></em>, and <em><u><Link to='/about'>a more fleshed-out introduction of myself</Link></u></em>.
          </Col>
        </Row>
        <Row className='text-center my-5'>
          <Col>
            <Link onClick={() => scrollToTop()} onMouseEnter={() => setArrow(<img className='img-fluid scrollTop' src='./uparrow.png' />)} onMouseLeave={() => setArrow(<img className='img-fluid scrollTop' src='./uparrowfilled.png' />)}>{arrow}</Link>
          </Col>
        </Row>
      </Container >
    </>
  );
}