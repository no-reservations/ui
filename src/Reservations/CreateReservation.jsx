import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";

import { API_BASE_URL } from "../config";

async function submitReservation(reservationProps) {
    let response = await fetch(`${API_BASE_URL}/restaurants/${this.props.restaurant}/reservations/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationProps),
    });
    let new_reservation = await response.json();
    return new_reservation.data;
}


const CreateReservation = props => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = e => {
        const form = document.getElementById("create-reservation-form");
        const formValid = e.currentTarget;

        if (formValid.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            setValidated(true);
            submitReservation({
                start: form.start.value,
                end: new Date(),
                restaurant: props.restaurant,
                name: form.name.value,
                party_size: form.party_size.value
            });
        }
    };

    const handleCancel = e => {
      props.setShowSelf(false);
      const form = document.getElementById("create-reservation-form");

      form.start.value = null;
      form.end.value = null;
      form.restaurant.value = null;
      form.name.value = '';
      form.party_size.value = '';

    };

    const disableButton = () => {
        const form = document.getElementById("create-reservation-form");
        console.log(form);
        return !form.start.value
            || !form.reservations.value
            || !form.name.value
            || !form.party_size.value;
    };

    return(
        <div className="create-restaurant-container">
            <h1>New Reservation</h1>
            {JSON.stringify(props.setShowSelf)}
            <Form id="create-reservation-form" noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Reservation Start Date</Form.Label>
                    <Form.Control
                        required
                        id="start"
                        type="date"
                        placeholder="Start Date"
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please enter a start time for your reservation!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Guest Name</Form.Label>
                    <Form.Control
                        required
                        id="name"
                        type="text"
                        placeholder="Guest Name"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a name for your reservation!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Party Size</Form.Label>
                    <Form.Control
                        required
                        id="party_size"
                        type="number"
                        placeholder="Reservation Party Size"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter the number of guests for your reservation!
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
            <Button
                className="submits"
                variant="primary"
                type="submit"
                onClick={handleSubmit}
            >
                Submit
            </Button>
            <Button
                className="submits"
                variant="secondary"
                onClick={() => handleCancel}
            >
                Cancel
            </Button>
        </div>
    );
};

export default CreateReservation;
