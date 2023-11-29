import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Image, Collapse, Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Articles from './ArticleComponent';

export default function Nav(props) {

    const [dice, setDice] = useState(<img className='dice img-fluid' src='./dicepitch.png' />);

    function diversify() {
        let x = Math.floor(Math.random() * Articles().length);
        (props.currentArticle == x) ? diversify() : props.setCurrentArticle(x);
    }

    return (
        <>
            <Container fluid>
                <Row className='pt-4 nav text-center'>
                    <Col xs='12'>
                        <Link to='/'><img className='img-fluid name' src='./nameT.png' /></Link>
                    </Col>
                    <Col sm='3' lg='3' className='py-4'>
                        <Link to='/books'>BOOKS</Link>
                    </Col>
                    <Col sm='3' lg='3' className='pt-2'>
                        <Link to='/rollthedice' onClick={() => diversify()} onMouseEnter={() => (setDice(<img className='dice img-fluid' src='./dicepitchyellow.png' />))} onMouseLeave={() => setDice(<img className='dice img-fluid' src='./dicepitch.png' />)}>
                            {dice}
                        </Link>
                    </Col>
                    <Col sm='3' lg='3' className='py-4'>
                        <Link to='/contact'>CONTACT</Link>
                    </Col>
                    <Col sm='3' lg='3' className='py-4'>
                        <Link to='/about'>ABOUT</Link>
                    </Col>
                </Row >
            </Container>
        </>
    );
}