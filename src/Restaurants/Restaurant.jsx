import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import "../App.css";
import "./Restaurant.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateRestaurant from "./CreateRestaurant";
import { Button } from "react-bootstrap";

import { API_BASE_URL } from "../config";

class Restaurant extends Component {
    constructor(props) {
        super(props);

        // let match = useRouteMatch();

        this.state = {
            restaurants: [],
            isLoading: true,
        }
    }

    async componentDidMount() {
        let response = await fetch(`${API_BASE_URL}/restaurants/all`);
        let restaurants = await response.json();

        //For presentation
        restaurants.data[0].reservations[0] = {
            name: 'josephs',
            size: 5,
            start: new Date()
        };

        this.setState({
            restaurants: restaurants.data,
            isLoading: false,
        });
    }

    getRest = restaurant => {
        let newList = this.state.restaurants;
        newList.push(restaurant);
        if(restaurant) {
            this.setState({
                restaurants: newList,
                showCreate: false
            });
        }
    };

    setShowSelf = (e) => {
        if(e !== null && e !== undefined)
            this.setState({
                showCreate: e
            });
    };

    render() {
        return(
            <div className="App-content-body container">
                <div className="restaurant-header text-secondary">
                    <h1 className="table-header">Restaurants</h1>
                </div>
                <div className="row table-container">
                    <Table aria-label="simple table" className="restaurant-table-container">
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
                            {!this.state.isLoading && this.state.restaurants.map(rest => {
                                return(
                                    <TableRow key={rest.name}>
                                        <TableCell component="th" scope="row">
                                            <div>{rest.name}</div>
                                        </TableCell>
                                        <TableCell align="center">
                                            <div>{rest.location}</div>
                                        </TableCell>
                                        <TableCell align="center">
                                            <div>{(rest.tables - rest.tables_reserved)}</div>
                                        </TableCell>
                                        <TableCell align="center">
                                            <div>{rest.tables_reserved}</div>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Link
                                                className={"text-decoration-none"}
                                                to={{
                                                    // pathname: "/reservations",
                                                    pathname: `/restaurants/${rest.normal_name}/reservations`,
                                                    // pathname: `${this.match.url}/${rest.normal_name}/reservations`,
                                                }}
                                            >
                                                See Reservations
                                            </Link>
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
                        <CreateRestaurant setShowSelf={this.setShowSelf} getRest={this.getRest}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Restaurant;