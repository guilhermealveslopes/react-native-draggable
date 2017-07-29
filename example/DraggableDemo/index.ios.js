/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import Draggable from 'react-native-draggable';
//import Draggable from './Draggable';//first, run "npm run source" to get Draggable.js

export default class DraggableDemo extends Component {
	constructor(props) {
		super(props);
		this._changeFace = this._changeFace.bind(this);
		this.state = {
			source: require('./img/trump1.png')
		};
	}
	_changeFace() {
		console.log("drag release");
		this.setState({source:require('./img/trump2.png')});
	}
	render() {
		return (
			<View style={{backgroundColor: 'blue', flex: 0.5}} >
				<Draggable renderShape='image' imageSource={this.state.source} renderSize={80} 
					offsetX={0} offsetY={0}
					pressDragRelease={this._changeFace}
					longPressDrag={()=>console.log('long press')}
					pressDrag={()=>console.log('press drag')}
					pressInDrag={()=>console.log('in press')}
					pressOutDrag={()=>console.log('out press')}
				/>
			</View>
		);
	}
}

AppRegistry.registerComponent('DraggableDemo', () => DraggableDemo);
