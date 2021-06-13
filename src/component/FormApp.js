import loginIcon  from './logo.jpg';
import login  from './login2.svg';
import React, { Component } from 'react';
import {Form,Button,Row,Col,Container} from 'react-bootstrap';
export default class FormApp extends Component {
    
    render() {
        return (
            <Container className="mt-5">

            <Row >
                <Col lg={4} md={6} sm={12} className="text-center form-box mt-5 p-3" style={{ marginTop:"30px"}}>
                    <img className="icon-img" src={loginIcon} alt="icon"/>
                    <Form  >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" style={{ marginTop:"30px"}}>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary btn-block" type="submit"  style={{ marginTop:"30px"}}>Login</Button>

                        <div className="text-left mt-3">
                            <a href="#"><small className="reset">Forgot Password? </small></a> II
                            <a href="/pages"><small className="reset ml-2">Sign UP</small></a>
                        </div>
                    </Form>
                </Col>

                <Col lg={8} md={6} sm={12}>
                    <img className="w-100" src={login} alt=""/>
                </Col>
            </Row>
        </Container>
        )
    }
}
