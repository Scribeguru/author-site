import React from 'react';
import {Container, Row, Col} from 'reactstrap'

export default function Books() {



    return (
        <Container className='foundation'>
            <Row className='my-5'>
                <Col sm='12' md='6'>
                <img className='img-fluid py-5' src='./mockup.jpg' />
                </Col>
                <Col>
                <h3 className='text-center'>
                    <b>Dancing Through the Labyrinth</b>
                </h3>
                <p className='pt-4 pb-5 bookDesc'>
                    Sick ass book bruv, absolutely mint. D'you know what? I reckon dis moit be the graytest fookin' book eva written! It's a fookin trip m8, honestly. I mean the shear breadth of the bloody thing is stunning first of all — but then out 'is ass the lad just pulls some of the sickest analogies in literature. I'm talkin shit Shakespeare ain't even considered once!
                </p>
                </Col>
            </Row>
            {/* <hr /> */}
        </Container>
    );

}