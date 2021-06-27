import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './dashboard.css';

class Home extends Component {
    state = {  };
    render() { 
        return (
            <div className="dashboard-container">
                <h1>Welcome to Mail Assistant!</h1>
            </div>
        );
    }
}
 
export default withRouter(Home);