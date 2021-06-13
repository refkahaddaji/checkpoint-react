import loginIcon  from './logo.jpg';
import login  from './login2.svg';

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Form,Button,Row,Col,Container} from 'react-bootstrap';

export default class RegistrationForm extends Component {

    render() {

        return (

<Container className="mt-5">

<Row >
    <Col lg={4} md={6} sm={12} className="text-center form-box mt-5 p-3" style={{ marginTop:"30px"}}>
        <img className="icon-img" src={loginIcon} alt="icon"/>
        <Form  >
            <Form.Group >
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                </Form.Group >
                    <Form.Group style={{ marginTop:"20px"}}>
                      <Form.Control
                        type="number"
                        name="phone"
                    
                        placeholder="Phone"
                        required
                      />
                    </Form.Group>
        
                    <Form.Group style={{ marginTop:"20px"}}>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                      />
                    </Form.Group>
        
              
        
                    <Form.Group style={{ marginTop:"20px"}}>
                      <Form.Control
                        type="text"
                        name="address"
                        placeholder="Full address"
                        required
                      />
                    </Form.Group>
        
                    <Form.Group style={{ marginTop:"20px"}}>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                    </Form.Group>
        
                    <Form.Group style={{ marginTop:"20px"}}>
                      <Form.Control
                        type="password"
                        name="confirmPass"
                        placeholder="Confirm Password"
                        required
                      />
                    </Form.Group>
              
              
            <Button variant="primary btn-block" type="submit"  style={{ marginTop:"30px"}}>Login</Button>
            <div className="text-left mt-3">
            Already have an account?  <a href="/"><small className="reset ml-2">Login Now</small></a>
              </div>
            
        </Form>
    </Col>

    <Col lg={8} md={6} sm={12}>
        <img className="w-100" src={login} alt=""/>
    </Col>
</Row>
</Container>

            
        
                  
            
            
                  
            
              
          );
        };
    }
     //   export default RegistrationForm;