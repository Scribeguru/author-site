import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Image, Collapse, Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Articles from './ArticleComponent';

export default function Nav(props) {

    const [dice, setDice] = useState(<img className='dice img-fluid' src='./dice.png' />);

    function diversify() {
        let x = Math.floor(Math.random() * Articles().length);
        (props.currentArticle == x) ? diversify() : props.setCurrentArticle(x);
    }

    return (
        <>
            <Container fluid>
                <Row className='pt-4 nav text-center'>
                    <Col sm='12' lg='4' className='name py-3'>
                        <Link to='/'>MITCHELL L.J. POCO</Link>
                    </Col>
                    <Col sm='2' lg='2' className='py-3'>
                        <Link to='/books'>Books</Link>
                    </Col>
                    <Col sm='2' lg='2' className='pb-3'>
                        <Link to='/rollthedice' onClick={() => diversify()} onMouseEnter={() => (setDice(<img className='dice img-fluid' src='./dicered.png' />))} onMouseLeave={() => setDice(<img className='dice img-fluid' src='./dice.png' />)}>
                            {dice}
                        </Link>
                    </Col>
                    <Col sm='2' lg='2' className='py-3'>
                        <Link to='/contact'>Contact</Link>
                    </Col>
                    <Col sm='2' lg='2' className='py-3'>
                        <Link to='/about'>About</Link>
                    </Col>
                </Row >
            </Container>
        </>
    );
}