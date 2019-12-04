import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => {

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
        list: {
            width: 360,
        },
    }));

    const [drawer, setDrawer] = useState(false);
    
    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setDrawer(open);
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
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Drawer open={drawer} onClose={toggleDrawer(false)}>
                        <div
                        className={useStyles().list}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                        >
                        <List>
                            <ListItem button key="Home">
                                <Link to="/home">
                                    <ListItemText primary="Home" />
                                </Link>
                            </ListItem>
                            
                            <ListItem button key="Restaurants">
                                <Link to="/restaurants">
                                    <ListItemText primary="Restaurants" />
                                </Link>
                            </ListItem>

                            <ListItem button key="Reservations">
                                <Link to="/reservations">
                                    <ListItemText primary="Reservations" />
                                </Link>
                            </ListItem>
                        </List>
                        </div>
                    </Drawer>
                    
                    <Typography variant="h6" className={useStyles().title}>
                        No Reservations
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;