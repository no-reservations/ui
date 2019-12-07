import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import { useParams } from 'react-router-dom';
import "../App.css";
import "../Restaurants/Restaurant.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { API_BASE_URL } from "../config";
import {Button} from "react-bootstrap";
import CreateReservation from "./CreateReservation";

class Reservations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurant: this.props.match.params.res,
            reservations: [],
            isLoading: true,
            showCreate: false
        }
    }

    async componentDidMount() {
        let response = await fetch(`${API_BASE_URL}/restaurants/${this.state.restaurant}/reservations`);
        console.log(JSON.stringify(response));
        let reservations = await response.json();

        this.setState({
            reservations: reservations.data,
            isLoading: false,
        });
    }

    render() {
        return(
            <div className="App-content-body container">
                <div className="restaurant-header text-secondary">
                    <h1 className="table-header">{this.props.restaurant}</h1>
                </div>
                {
                    (this.state.reservations && this.state.reservations.length > 0) ? (
                    <div className="row table-container">
                        <Table aria-label="simple table" className="restaurant-table-container">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Reservation Name</TableCell>
                                    <TableCell align="center">Reservation Time</TableCell>
                                    <TableCell align="center">Reservation Size</TableCell>
                                    <TableCell align="center">Seat Guest or Finish/Cancel Reservation</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.reservations.map(rez => {
                                    return(
                                        <TableRow key={rez.name}>
                                            <TableCell component="th" scope="row">
                                                {rez.name}
                                            </TableCell>
                                            <TableCell align="center">
                                                {JSON.stringify(rez.start)}
                                            </TableCell>
                                            <TableCell align="center">
                                                {rez.size}
                                            </TableCell>
                                            <TableCell align="center">
                                                <button disabled className="text-success">Seat Or Cancel</button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </div>
                ) : (
                        <Paper>
                            <Typography variant="h5" component="h3">
                                No reservations have been made yet
                            </Typography>
                        </Paper>
                    )}
                <div className="create-button">
                    {!this.state.showCreate && (
                        <Button onClick={() => {
                            this.setState({
                                showCreate: !this.state.showCreate
                            });
                        }}>
                            Create New Reservation
                        </Button>
                    )}
                    {this.state.showCreate && (
                        <CreateReservation setShowSelf={this.setShowSelf} restaurant={this.state.restaurant.normal_name}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Reservations;