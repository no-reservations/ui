import React, { Component } from 'react';
import {Form, Button} from "react-bootstrap";

class CreateRestaurant extends Component{

    state = {
        restaurant: {
            name: String,
            normal_name: String,
            location: String,
            tables: Number,
            tables_reserved: Number,
            current_reservations: Number,
            created_at: Date,
            updated_at: Date
        }
    };

    handleTableInfoInput = (input) => {
      const inputCaught = input.target.value;
      const inputField = input.target.id;
      let tempRest = { ...this.state.restaurant };
      tempRest[inputField] = inputCaught;
      this.setState({
          restaurant: tempRest
      });
    };

    createRestaurant = () => {
      let tempRest = { ...this.state.restaurant };
      tempRest.created_at = new Date();
      tempRest.updated_at = new Date();
      tempRest.current_reservations = 0;
      tempRest.tables_reserved = 0;
      tempRest.normal_name = '';
      this.setState({
          restaurant: tempRest
      }, () => this.props.getRest(this.state.restaurant));
    };

    render() {
        return(
            <div className="create-restaurant-container">
                <h1>Restaurant</h1>
                <Form id="create-restaurant">
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            id="name"
                            type="text"
                            placeholder="Enter Name"
                            onChange={e => this.handleTableInfoInput(e)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            id="location"
                            type="text"
                            placeholder="Enter Location"
                            onChange={e => this.handleTableInfoInput(e)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Number of Tables</Form.Label>
                        <Form.Control
                            id="tables"
                            type="number"
                            placeholder="Enter The Number of Tables"
                            onChange={e => this.handleTableInfoInput(e)}
                        />
                    </Form.Group>
                </Form>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={() => this.createRestaurant()}
                >
                    Submit
                </Button>
            </div>
        );
    }
};

export default CreateRestaurant;