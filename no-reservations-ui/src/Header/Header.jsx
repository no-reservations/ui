import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className={useStyles() + " head-container"}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={useStyles().menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={handleClick}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}><Link to="/home">Home</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/restaurants">Restaurants</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/reservations">Reservations</Link></MenuItem>
                    </Menu>
                    <Typography variant="h6" className={useStyles().title}>
                        No Reservations
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;