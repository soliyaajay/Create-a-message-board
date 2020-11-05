import React, { Component } from "react";
import { Image, View } from "react-native";
import { CommonActions } from '@react-navigation/native'
import { Matrics, Font, Color } from "../../common/styles";

class Splash extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: ""
		};
	}
	componentWillMount() {
		
	}

	async componentDidMount() {
		this.renderScreen('Home');
	}

	renderScreen = (routeName= null) => {
		this.props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: routeName }],
            }),
        )
	}

	render() {
		return (
			<View
				style={{
					width: Matrics.screenWidth,
					height: Matrics.screenHeight,
					backgroundColor: "white"
				}}
			/>
		);
	}
}

export default Splash;
