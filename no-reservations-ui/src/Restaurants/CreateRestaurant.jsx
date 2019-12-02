import React, { Component } from 'react';
import {Form, Button} from "react-bootstrap";

class CreateRestaurant extends Component{

    state = {
        restaurant: {
            name: '',
            normal_name: '',
            location: '',
            tables: 0,
            tables_reserved: 0,
            current_reservations: 0,
            created_at: new Date(),
            updated_at: new Date()
        }
    };

    handleNameInput = (input) => {
      const inputCaught = input.target.value;
      const inputField = input.target.id;
      let tempRest = { ...this.state.restaurant };
      tempRest[inputField] = inputCaught;
      this.setState({
          restaurant: tempRest
      });
    };

    render() {
        return(
            <div className="create-restaurant-container">
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            id="name"
                            type="text"
                            placeholder="Enter Name"
                            onChange={e => this.handleNameInput(e)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            id="location"
                            type="text"
                            placeholder="Enter Location"
                            onChange={e => this.handleNameInput(e)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tables</Form.Label>
                        <Form.Control
                            id="tables"
                            type="number"
                            placeholder="Enter The Number of Tables"
                            onChange={e => this.handleNameInput(e)}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={() => this.props.getRest(this.state.restaurant)}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
};

export default CreateRestaurant;