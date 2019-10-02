import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, Alert  } from 'react-bootstrap';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        // values variable
        const { values, handleChange } = this.props;
        
        return (
            <Container>
                <Alert variant="success">
                    <Alert.Heading>Enter User Details</Alert.Heading>                    
                </Alert>
                <Form>
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            onChange={handleChange('firstName')} 
                            defaultValue={values.firstName}
                            placeholder="Enter first name" 
                        />                        
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            placeholder="Enter first name" 
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter your email" 
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={this.continue}
                    >
                        Submit
                    </Button>
                </Form>
            </Container>
            
        )
    }
}


export default FormUserDetails
