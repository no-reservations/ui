import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link className="link-text" to="/restaurants">
                        <Button className="btn-primary-container" variant="primary">See Restaurants</Button>
                    </Link>
                </Col>
                <Col>
                    <Link className="link-text" to="/restaurants">
                        <Button className="btn-primary-container" variant="primary">See Reservations</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );

};

export default HomePage;