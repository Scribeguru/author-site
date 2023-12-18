import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Home() {

  const [arrow, setArrow] = useState(<img className='img-fluid scrollTop' src='./uparrowfilled.png' />)
  const [dimensions, setDimensions] = useState({ width: window.innerWidth })

  useEffect(() => {
    setTimeout(function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
    function handleResize() {
      setDimensions({ width: window.innerWidth })
    }
    window.addEventListener('resize', handleResize);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function moon() {
    return (dimensions.width <= 576) ? <></> : <img className='moon' src='./moon.png' />;
  }

  function fool() {
    return (dimensions.width <= 576) ? <></> : <img className='fool' src='./fool.png' />;
  }

  //if the window.innerWidth is lesser than 576, hide the element

  return (
    <>
      <Container className='foundation'>
        <Row className='py-4 text-center'>
          <Col>
            <h1>
              <span className='hook'>A Striking Exhibition of Contemplative Philosophy</span>.
            </h1>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col xs='hidden' lg='3' className='text-start'>
            {moon()}
          </Col>
          <Col className='buyLink my-2'>
            <span className='hand'>☛ </span><u><Link target='_blank' to='https://a.co/d/49tsXSB' className='available' ><em>Pre-order the ebook!</em></Link></u><span className='hand'> ☜</span>
          </Col>
          <Col xs='hidden' lg='3' ></Col>
          <Col xs='12' className='mt-1 mb-4'>
          <Link target='_blank' to='https://a.co/d/49tsXSB'><img className='img-fluid book' src='./mockup.png' /></Link>
          </Col>
        </Row>
        <Row className='blurb text-center'>
          <Col xs='hidden' lg='3'></Col>
          <Col className='mb-4'>
            Minted from the pressure of America's elements,<br /><em><b><u><Link to='/books'>Dancing Through the Labyrinth</Link></u></b></em>
            <br />masterfully extricates existential gold from the very limits of language.
          </Col>
          <Col xs='hidden' lg='3' className='text-end'>
            {fool()}
          </Col>
        </Row>
        <hr className='mt-0' />
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