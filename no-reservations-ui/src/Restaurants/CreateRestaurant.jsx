import React, { Component, useState } from 'react';
import { Form, Button } from "react-bootstrap";

import { API_BASE_URL } from "../config";

async function submitRestaurant(restaurantProps) {
    let response = await fetch(`${API_BASE_URL}/restaurants/new`, {
        method: "POST",
        data: restaurantProps,
    });
    let new_restaurant = await response.json();
    console.log(new_restaurant.data);
    return new_restaurant.data;
}

function CreateRestaurant(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
            setValidated(true);
            // submitRestaurant
            console.log({
                name: form.name,
                location: form.location,
                tables: form.tables
            });
        }
    
    };

    return(
        <div className="create-restaurant-container">
            <h1>New Restaurant</h1>
            <Form id="create-restaurant" noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        id="name"
                        type="text"
                        placeholder="Name"
                        // onChange={e => this.handleTableInfoInput(e)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                        // onChange={e => this.handleTableInfoInput(e)}
                    />
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
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
                        // onChange={e => this.handleTableInfoInput(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter the number of tables your restaurant has!
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
            <Button type="submit">Submit</Button>
            {/* <Button
                className="submits"
                variant="primary"
                type="submit"
                onClick={() => this.createRestaurant()}
            > */}
                {/* Submit
            </Button> */}
            <Button
                className="submits"
                variant="secondary"
                // type="submit"
                onClick={() => props.setShowSelf(false)}
            >
                Cancel
            </Button>
        </div>
    );
}

// class CreateRestaurant extends Component{

//     state = {
//         restaurant: {
//             name: '',
//             normal_name: '',
//             location: '',
//             tables: 0,
//             tables_reserved: 0,
//             current_reservations: 0,
//             created_at: new Date(),
//             updated_at: new Date()
//         }
//     };

//     handleTableInfoInput = (input) => {
//       const inputCaught = input.target.value;
//       const inputField = input.target.id;
//       let tempRest = { ...this.state.restaurant };
//       tempRest[inputField] = inputCaught;
//       this.setState({
//           restaurant: tempRest
//       });
//     };

//     createRestaurant = () => {
//       const name = (this.state.restaurant.name !== null) && (this.state.restaurant.name.length > 0);
//       const location = (this.state.restaurant.location !== null) && (this.state.restaurant.location.length > 0);
//       const tables = this.state.restaurant.tables !== null;
//       if(name && location && tables) {
//           let tempRest = {...this.state.restaurant};
//           this.setState({
//               restaurant: tempRest
//           }, () => this.props.getRest(this.state.restaurant));
//       } else {
//           alert('name, location, and tables must all be filled out');
//       }
//     };

//     render() {
//         return(
//             <div className="create-restaurant-container">
//                 <h1>New Restaurant</h1>
//                 <Form id="create-restaurant">
//                     <Form.Group>
//                         <Form.Label>Name</Form.Label>
//                         <Form.Control
//                             id="name"
//                             type="text"
//                             placeholder="Enter Name"
//                             onChange={e => this.handleTableInfoInput(e)}
//                         />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>Location</Form.Label>
//                         <Form.Control
//                             id="location"
//                             type="text"
//                             placeholder="City, State"
//                             onChange={e => this.handleTableInfoInput(e)}
//                         />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>Number of Tables</Form.Label>
//                         <Form.Control
//                             id="tables"
//                             type="number"
//                             placeholder="Enter The Number of Tables"
//                             onChange={e => this.handleTableInfoInput(e)}
//                         />
//                     </Form.Group>
//                 </Form>
//                 <Button
//                     className="submits"
//                     variant="primary"
//                     type="submit"
//                     onClick={() => this.createRestaurant()}
//                 >
//                     Submit
//                 </Button>
//                 <Button
//                     className="submits"
//                     variant="primary"
//                     type="submit"
//                     onClick={() => this.props.setShowSelf(false)}
//                 >
//                     Cancel
//                 </Button>
//             </div>
//         );
//     }
// };

export default CreateRestaurant;