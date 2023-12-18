import React, { useState, useEffect, useRef } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Footer() {

    const [xcom, setXcom] = useState(<Link target='_blank' to='https://twitter.com/@mitch_lj_poco'><img className='img-fluid social-icon' src='./xcom1.png' /></Link>);
    const [insta, setInsta] = useState(<Link target='_blank' to='https://instagram.com/mljpoco'><img className='img-fluid social-icon' src='./instagram1.png' /></Link>);
    const [tiktok, setTiktok] = useState(<Link target='_blank' to='https://tiktok.com/@mljpoco'><img className='img-fluid social-icon' src='./tiktok1.png' /></Link>);
    const [youtube, setYoutube] = useState(<Link target='_blank' to='https://www.youtube.com/@MLJPoco'><img className='img-fluid social-icon' src='./youtube1.png' /></Link>);

    return (
        <>
            <footer>
                <Row className='py-3 text-center'>
                    <Col xs='12' sm='3' className='py-3'>
                        <Link target='_blank' to='https://twitter.com/@mitch_lj_poco' onMouseEnter={() => setXcom(<img className='img-fluid social-icon' src='./xcom.png' />)} onMouseLeave={() => setXcom(<img className='img-fluid social-icon' src='./xcom1.png' />)}>{xcom}</Link>
                    </Col>
                    <Col xs='12' sm='3' className='py-3'>
                        <Link target='_blank' to='https://instagram.com/mljpoco' onMouseEnter={() => setInsta(<img className='img-fluid social-icon' src='./instagram.png' />)} onMouseLeave={() => setInsta(<img className='img-fluid social-icon' src='./instagram1.png' />)}>{insta}</Link>
                    </Col>
                    <Col xs='12' sm='3' className='py-3'>
                        <Link target='_blank' to='https://tiktok.com/@mitchljpoco' onMouseEnter={() => setTiktok(<img className='img-fluid social-icon' src='./tiktok.png' />)} onMouseLeave={() => setTiktok(<img className='img-fluid social-icon' src='./tiktok1.png' />)}>{tiktok}</Link>
                    </Col>
                    <Col xs='12' sm='3' className='py-3'>
                        <Link target='_blank' to='https://www.youtube.com/@MLJPoco' onMouseEnter={() => setYoutube(<img className='img-fluid social-icon' src='./youtube.png' />)} onMouseLeave={() => setYoutube(<img className='img-fluid social-icon' src='./youtube1.png' />)}>{youtube}</Link>
                    </Col>
                </Row >
                <Row className='pb-1 pt-2 text-center cprt'>
                    <Col>
                        © 2023 Mitchell L.J. Poco. All rights reserved.
                    </Col>
                </Row>
            </footer>
        </>
    );
}