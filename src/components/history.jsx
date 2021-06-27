import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './dashboard.css';

class History extends Component {
    state = {  };
    render() { 
        return (
            <div className="dashboard-container">
                <h1>Welcome to your Mail History</h1>
            </div>
        );
    }
}
 
export default withRouter(History);