import React, { Component } from 'react';
import { Row, Col } from 'antd';
import util from '../../utils/util';
import './index.less';

class Header extends Component {
	state = {
		userName: 'hello',
		sysTime: ''
	};
	render() {
		return (
			<div className="header">
				<Row className="header-top">
					<Col span={24}>
						<span className="userName">欢迎，{this.state.userName}</span>
						<a className="out" href="###">退出</a>
					</Col>
				</Row>
				<Row className="breadcrumb">
					<Col span={4} className="breadcrumb-title">首页</Col>
					<Col span={20} className="weather">
						<span className="date">{this.state.sysTime}</span>
						<span className="weather-detail">多云转晴</span>
					</Col>
				</Row>
			</div>
		);
	}
	componentDidMount(props, state) {
		setInterval(() => {
			const sysTime = util.formateDate((new Date()).getTime());
			this.setState((newState) => {
				newState.sysTime = sysTime;
				return newState;
			});
		}, 1000);

	}
}

export default Header;