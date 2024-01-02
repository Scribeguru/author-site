import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom';

export default function Books() {

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
        <Container className='foundation'>
            <Row className='my-5 text-center'>
                <Col sm='12' md='6'>
                    <Link target='_blank' to='https://a.co/d/ePi6fgl'><img className='img-fluid' src='./PrintDigital.png' /></Link>
                    <br />
                    <span className='hand'>☛ </span><u><Link target='_blank' to='https://a.co/d/ePi6fgl' className='available' ><em>Available where you buy books</em></Link></u><span className='hand'> ☜</span>
                    <br />
                    <br />
                    Retail Audio Sample
                    <br />
                    <audio controls src='./audio-sample.mp3' />
                </Col>
                <Col>
                    <h3 className='mt-5 text-center'>
                        <b>Dancing Through the Labyrinth</b>
                    </h3>
                    <p className='pt-4 pb-5 about'>
                        A point-blank attempt on confusion itself. Marked by the dogged precision of one resolved to sort the universe with nothing more than a pen and a visceral hunger for understanding, this berserk dissection of the world stands alone — a sober yet dynamic testament both to what crystalline lucidity lines the unnervingly paradoxical, and what incontrovertible madness is tucked into the folds of the mundane.<br /><br />Concocted living on the back of a motorcycle following a familially, financially, psychologically shattering misadventure with psychedelics — the deserts, wetlands, mountains, and plains of the USA served as the backdrop and temple of its genesis;<em><b> Dancing Through the Labyrinth </b></em>sets a brand-new standard for literature unfettered by the shackles of institutional dogma.
                    </p>
                </Col>
            </Row>
            {/* <hr /> */}
            <Row className='text-center my-5'>
                <Col>
                    <Link onClick={() => scrollToTop()} onMouseEnter={() => setArrow(<img className='img-fluid scrollTop' src='./uparrow.png' />)} onMouseLeave={() => setArrow(<img className='img-fluid scrollTop' src='./uparrowfilled.png' />)}>{arrow}</Link>
                </Col>
            </Row>
        </Container>
    );

}