import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import "../App.css";
import "../Restaurants/Restaurant.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Reservations extends Component {

    state = {
        restaurant: {}
    };

    componentDidMount() {
        const incomingRestaurant = this.props.location.param1;
        this.setState({
            restaurant: incomingRestaurant
        });
    }

    render() {
        return(
            <div className="App-content-body container">
                <div className="restaurant-header text-secondary">
                    <h1 className="table-header">{this.state.restaurant.name}</h1>
                </div>
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
                            {(this.state.restaurant.reservations && this.state.restaurant.reservations.length > 0) ? this.state.restaurant.reservations.map(rez => {
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
                            }) : (
                                <TableRow>
                                    <TableCell align="center">
                                        <h1>No Reservations</h1>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Reservations;