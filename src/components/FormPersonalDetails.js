import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, Alert, ButtonGroup, Nav } from 'react-bootstrap';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        // values variable
        const { values, handleChange } = this.props;

        return (
            <Container>
                <Alert variant="success">
                    <Alert.Heading>Enter Personal Details</Alert.Heading>
                </Alert>
                <Form>
                    <Form.Group controlId="occupation">
                        <Form.Label>Occupation</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={handleChange('occupation')}
                            defaultValue={values.occupation}
                            placeholder="Enter occupation"
                        />
                    </Form.Group>
                    <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={handleChange('city')}
                            defaultValue={values.city}
                            placeholder="Enter city"
                        />
                    </Form.Group>

                    <Form.Group controlId="bio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="3"
                            placeholder="Enter your bio"
                            onChange={handleChange('bio')}
                            defaultValue={values.bio}
                        />
                        
                    </Form.Group>
                    <ButtonGroup>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={this.continue}
                        >
                            Continue
                    </Button>
                        <Button
                            variant="warning"
                            type="submit"
                            onClick={this.back}
                        >
                            Back
                    </Button>
                    </ButtonGroup>
                    
                </Form>
            </Container>

        )
    }
}


export default FormPersonalDetails
