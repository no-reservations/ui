import React, {Component} from 'react';
import "./App.css";

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        view: ''
    };

    render() {
        return(
            <div className="App-content-body">Content</div>
        );
    }
}

export default AppContainer;