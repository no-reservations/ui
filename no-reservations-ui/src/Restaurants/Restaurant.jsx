import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import "../App.css";
import "./Restaurant.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateRestaurant from "./CreateRestaurant";
import {Button} from "react-bootstrap";

class Restaurant extends Component {

    state = {
        restaurants: [
            {
                name: 'rest1',
                normal_name: 'rest_1',
                location: 'beaverton',
                tables: 10,
                tables_reserved: 1,
                current_reservations: 1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'rest2',
                normal_name: 'rest_2',
                location: 'portland',
                tables: 5,
                tables_reserved: 4,
                current_reservations: 4,
                created_at: new Date(),
                updated_at: new Date()
            }
        ],
        showCreate: false
    };

    getRest = (restaurant) => {
        let newList = this.state.restaurants;
        newList.push(restaurant);
        if(restaurant) {
            this.setState({
                restaurants: newList
            });
        }
    };

    render() {
        return(
            <div className="App-content-body container">
                <div className="restaurant-header text-secondary">
                    <h1 className="table-header">Restaurants</h1>
                </div>
                <div className="row table-container">
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Restaurant Name</TableCell>
                                <TableCell align="center">Restaurant Location</TableCell>
                                <TableCell align="center">Tables Available</TableCell>
                                <TableCell align="center">Tables Reserved</TableCell>
                                <TableCell align="center">Reservations</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.restaurants.map(rest => {
                                return(
                                    <TableRow key={rest.name}>
                                        <TableCell component="th" scope="row">
                                            {rest.name}
                                        </TableCell>
                                        <TableCell align="center">
                                            {rest.location}
                                        </TableCell>
                                        <TableCell align="center">
                                            {rest.tables - rest.tables_reserved}
                                        </TableCell>
                                        <TableCell align="center">
                                            {rest.tables_reserved}
                                        </TableCell>
                                        <TableCell align="center">
                                            <button disabled className="text-success">See Reservations</button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
                <div className="create-button">
                    {!this.state.showCreate && (
                        <Button onClick={() => {
                            this.setState({
                                showCreate: !this.state.showCreate
                            });
                        }}>
                            Create New Restaurant
                        </Button>
                    )}
                    {this.state.showCreate && (
                        <CreateRestaurant getRest={this.getRest}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Restaurant;