import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, ButtonGroup, Alert, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export class Confirm extends Component {
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
                    <Alert.Heading>Confirmation Details</Alert.Heading>
                </Alert>
                <p>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Name:</Card.Title>
                            <Card.Text>
                                {values.firstName + " "} {values.lastName}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </p>
                <p>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Eamil:</Card.Title>
                            <Card.Text>
                                {values.email}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </p>
                <p>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Occupation:</Card.Title>
                            <Card.Text>
                                {values.occupation}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </p>
                <p>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>City:</Card.Title>
                            <Card.Text>
                                {values.city}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </p>
                <p>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Bio:</Card.Title>
                            <Card.Text>
                                {values.bio}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </p>
                
                
                    <ButtonGroup>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={this.continue}
                        >
                            Confirm
                    </Button>
                        <Button
                            variant="warning"
                            type="submit"
                            onClick={this.back}
                        >
                            Back
                    </Button>
                    </ButtonGroup>
               
                
            </Container>

        )
    }
}


export default Confirm
