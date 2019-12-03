import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import "./HomePage.css";

const HomePage = () => {

    return(
        <Container>
            <Row>
                <Col>
                    <Button className="btn-primary-container" variant="primary">Create Restaurants</Button>
                </Col>
                <Col>
                    <Button className="btn-primary-container" variant="primary">Create Reservations</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className="btn-primary-container" variant="primary">See Restaurants</Button>
                </Col>
                <Col>
                    <Button className="btn-primary-container" variant="primary">See Reservations</Button>
                </Col>
            </Row>
        </Container>
    );

};

export default HomePage;