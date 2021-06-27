import React, { Component } from "react";
import { withRouter } from 'react-router'; 
import { Link } from "react-router-dom";
import { Button } from 'antd';
import LoginOutlined from '@ant-design/icons';

class SignUp extends Component {
    render() { 
        return (
            <div className="container">
                <div className="box">
                    <div className="header">
                        <h2 style = {{color: 'white'}}>SIGN UP</h2>
                        <p>
                        <i>Please Enter your details</i>
                        </p>
                    </div>

                    <form>
                        <label for="text">Username</label>
                        <input type="text" placeholder="Username" name="" required/>
                        <label for="text">Email ID</label>
                        <input type="text" placeholder="Email ID" name="" required/>
                        <label for="password">Password</label>
                        <input type="password" placeholder="Password" name="" required/>
                        <div className="site-button-ghost-wrapper">
                            <br></br>
                            <Button type = "primary" onClick={()=>this.props.history.push('/home')} value="Signup">Sign Up<LoginOutlined /></Button>
                        </div>
                    </form>
                    <span>
                    Already have an account? <Link to="/">Log In</Link>
                    </span>
                </div>
            </div>
        );
    }
}
 
export default withRouter(SignUp);