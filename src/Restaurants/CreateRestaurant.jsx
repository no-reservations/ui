import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";

import { API_BASE_URL } from "../config";

async function submitRestaurant(restaurantProps) {
    let response = await fetch(`${API_BASE_URL}/restaurants/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurantProps),
    });
    let new_restaurant = await response.json();
    return new_restaurant.data;
}

function CreateRestaurant(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = document.getElementById("create-restaurant-form");
        const formValid = event.currentTarget;

        if (formValid.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
            setValidated(true);
            submitRestaurant({
                name: form.name.value,
                location: form.location.value,
                tables: form.tables.value
            });
        }
    };

    const handleCancel = event => {
        props.setShowSelf(false);
        const form = document.getElementById("create-restaurant-form");

        form.name.value = '';
        form.location.value = '';
        form.tables.value = '';
    };

    return(
        <div className="create-restaurant-container">
            <h1>New Restaurant</h1>
            {JSON.stringify(props.setShowSelf)}
            <Form id="create-restaurant-form" noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        id="name"
                        type="text"
                        placeholder="Name"
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please enter a name for your restaurant!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        required
                        id="location"
                        type="text"
                        placeholder="City, State"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a location for your restaurant!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Number of Tables</Form.Label>
                    <Form.Control
                        required
                        id="tables"
                        type="number"
                        placeholder="Number of tables"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter the number of tables your restaurant has!
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
}

CreateRestaurant.defaultProps = {
    setShowSelf: function () {}
};

export default CreateRestaurant;