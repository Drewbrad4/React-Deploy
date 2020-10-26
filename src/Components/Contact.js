import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class Contact extends Component{
  render(){
    return (
      <>
        <Fade delay={700}>
          <h2 id="contact" className="header">Contact Me</h2>
        </Fade>
        <Form className="form" name="contact_form" onSubmit={this.props.onSubmit}>
          <Slide left delay={500}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Name:</Label>
                <Input type="text" name="name" id="name" placeholder="Name Here" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email:</Label>
                <Input type="email" name="email" id="email" placeholder="example@email.com" />
              </FormGroup>
            </Col>
          </Row>
          </Slide>
          <Slide right delay={500}>
          <FormGroup>
            <Label for="exampleText">Message:</Label>
            <Input type="textarea" name="message" id="text" placeholder="I have a job for you!"/>
          </FormGroup>
          </Slide>
          <Fade delay={500}>
            <Button id="contactButton" className="bg-info" type="submit">Send</Button>
          </Fade>
        </Form>
      </>
    );
  }
}

  