import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';


export default function About() {

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
            <Row className='my-5'>
                <Col>
                <h3 className='my-2 text-center'>
                        <b>About</b>
                    </h3>
                    <p className='py-5 my-3 about'>
                    Thanks for checking out my About page. I was born in Niagara Falls, Canada, raised nearby in a town called Fort Erie (or Fort Dreary, depending on who you ask), went to highschool in southeast Pennsylvania, and was in and out of the Marines before I turned twenty-one. I studied a bit of software development, of which this website is a product — and hit the road on the back of my Suzuki DR650 the day before I turned twenty-two. On that trip I wrote my first book: Dancing Through the Labyrinth.<br /><br />There's some conventional wisdom that says it's smart to hold off writing a book before aging patiently, but  as far as I'm concerned you should pick the things you'd like to do prior to taking the long nap — and do them while you can. I'll be the first to admit I've never read anything like what I choose to write, but I've been composing this kind of severe philosophical prose since my first adolescent attempts at "journaling." I'd sit down without aim and instantly lose myself in a torrent of description and explanation, as though I were a choiceless telegraph directly linked to the full depth and breadth of every notion I'd encountered to then.<br /><br />By the time writing took its place alongside exercise, meditation, and reading, rounding off my signature quartet of strategies for maintaining sanity, I was forced to honor the fact it topped the list of what I felt I could offer the world — and so I look forward to many years of diligent transcription, hopefully with you along for the ride!
                    </p>
                </Col>
                <Col sm='12' md='6'>
                    <img className='img-fluid p-4' src='./authorPic1.png' />
                </Col>
            </Row>
            {/* <hr /> */}
            <Row className='text-center my-5'>
                <Col>
                    <Link onClick={() => scrollToTop()} onMouseEnter={() => setArrow(<img className='img-fluid scrollTop' src='./uparrow.png' />)} onMouseLeave={() => setArrow(<img className='img-fluid scrollTop' src='./uparrowfilled.png' />)}>{arrow}</Link>
                </Col>
            </Row>
        </Container>
    </>
  )
}