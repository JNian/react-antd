// 引入jsonp 
import JsonP from 'jsonp';
// 引入axios
import axios from 'axios';

export default class Axios {
	static jsonp(options) {
		return new Promise((resolve, reject) => {
			JsonP(options.url, {
				param: 'callback'
			}, (err, response) => {
				if (response.status === 'success') {
					resolve(response);
				} else {
					reject(response.message);
				}
			})
		})
	}
}