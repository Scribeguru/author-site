import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';

export default function Contact() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }, []);

  return (

    <Container className='foundation'>
      <Row className='mb-5'>
        <Col>
          <Form action="https://formsubmit.co/mitchpoco@mitchpo.co" method="POST" className='p-4'>
            <FormGroup>
              <h3><b>Contact Form</b></h3>
            </FormGroup>
            <Col sm='6'>
              <FormGroup>
                <Label for='name'>
                  Your Name
                </Label>
                <Input
                  className='mb-4'
                  id='name'
                  name='name'
                  required
                />
                <Label for='email'>
                  Your Email
                </Label>
                <Input
                  className='mb-4'
                  id='email'
                  name='email'
                  type='email'
                  required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for='message'>
                  Your Message
                </Label>
                <Input
                  id='message'
                  name='message'
                  type='textarea'
                  rows={7}
                  maxLength={1000}
                  onChange={e => setCount(e.target.value.length)}
                  required
                />
                <span className='count'>{count} of 1000 characters.</span>
              </FormGroup>
            </Col>
            <Col className='text-center'>
              <Button onMouseDown={(e) => e.preventDefault()} className='px-4 py-2'>
                <b>Send</b>
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}