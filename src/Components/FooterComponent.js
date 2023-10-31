import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Image, Collapse, Form, FormGroup, Label, Input, Button, footer } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <>
            <footer>
                <Row className='py-3 text-center'>
                    <Col xs='12' sm='3' className='py-3'>
                        <Link target='_blank' to='https://twitter.com/@mitch_lj_poco'><img className='img-fluid social-icon' src='./xcom.png'/></Link>
                    </Col>
                    <Col xs='12' sm='3' className='py-3'>
                        <Link target='_blank' to='https://instagram.com/mljpoco'><img className='img-fluid social-icon' src='./instagram.png'/></Link>
                    </Col>
                    <Col xs='12' sm='3' className='py-3'>
                        <Link target='_blank' to='https://tiktok.com/@mljpoco'><img className='img-fluid social-icon' src='./tiktok.png'/></Link>
                    </Col>
                    <Col xs='12' sm='3' className='py-3'>
                        <Link target='_blank' to='https://www.youtube.com/channel/@MLJPoco'><img className='img-fluid social-icon' src='./youtube.png'/></Link>
                    </Col>
                </Row >
            </footer>
        </>
    );
}