import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron, Button } from 'react-bootstrap';

export class Confirm extends Component {
    


    
    
    render() {

        return (
            <Container>
                <Jumbotron>
                    <h1>Confirmation Success</h1>
                    <p>
                        We have received your submission and you will receive an email from us shortly!
                    </p>
                    
                </Jumbotron> 
            </Container>

        )
    }
}


export default Confirm
