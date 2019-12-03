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
      const name = (this.state.restaurant.name !== null) && (this.state.restaurant.name.length > 0);
      const location = (this.state.restaurant.location !== null) && (this.state.restaurant.location.length > 0);
      const tables = this.state.restaurant.tables !== null;
      if(name && location && tables) {
          let tempRest = {...this.state.restaurant};
          tempRest.created_at = new Date();
          tempRest.updated_at = new Date();
          tempRest.current_reservations = 0;
          tempRest.tables_reserved = 0;
          tempRest.normal_name = '';
          this.setState({
              restaurant: tempRest
          }, () => this.props.getRest(this.state.restaurant));
      } else {
          alert('name, location, and tables must all be filled out');
      }
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
                    className="submits"
                    variant="primary"
                    type="submit"
                    onClick={() => this.createRestaurant()}
                >
                    Submit
                </Button>
                <Button
                    className="submits"
                    variant="primary"
                    type="submit"
                    onClick={() => this.props.setShowSelf(false)}
                >
                    Cancel
                </Button>
            </div>
        );
    }
};

export default CreateRestaurant;