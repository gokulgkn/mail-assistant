import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd/dist/antd.js';

class Sider extends Component {
  state = {
    theme: 'dark',
    current: '1',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div className = "sidebar">
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
        >
            <Menu.Item key="1" onClick={ ()=> this.props.history.push('/home') }>Home</Menu.Item>
            <Menu.Item key="2" onClick={ ()=> this.props.history.push('/history') }>History</Menu.Item>
            <Menu.Item key="3" onClick={ ()=> this.props.history.push('/mail') }>Add/Edit Mail Features</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Sider);
