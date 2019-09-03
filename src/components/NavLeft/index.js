import React, { Component } from 'react';
import { Menu } from 'antd';
import MenuConfig from '../../resource/menuConfig';
import './index.less';
const { SubMenu } = Menu;



class NavLeft extends Component {
	constructor(props) {
		super(props);
		this.state = {
			MenuTreeNode: []
		}
	}

	renderMenu = (data) => {
		return data.map((item) => {
			if (item.children) {
				return (
					<SubMenu key={item.key} title={item.title}> 
						{this.renderMenu(item.children)}
					</SubMenu>
				)
			}
			return (<Menu.Item key={item.key}>{item.title}</Menu.Item>);
		});
	}
	render() {
		
		return (
			<div className="nav-left">
				<div className="logo">
					<img src="/assets/logo-ant.svg" alt="logo"/>
					<h1>antd</h1>
				</div>
				<Menu 
					theme="dark"
					className="menu"
				>
					{ this.state.MenuTreeNode }
				</Menu>
			</div>
		)
	}
	componentDidMount() {
		const MenuTreeNode = this.renderMenu(MenuConfig);
		this.setState({
			MenuTreeNode
		})
	}
}

export default NavLeft;