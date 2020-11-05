import { Matrics, Font, Color } from "../../common/styles";
import { Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default (styles = {
	mainContainer: {
		flex: 1
	},
	headerStyle: {
		backgroundColor: "#ffffff",
		shadowRadius: 0,
		shadowOffset: {
			height: 0
		},
		height: Matrics.ScaleValue(60),
		justifyContent: "center",
		alignItems: "center"
	},
	viewContainerStyle: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	logOutButtonStyle: {
		width: Matrics.ScaleValue(80),
		height: Matrics.ScaleValue(30),
		justifyContent: "flex-end",
		alignItems: "center",
		alignSelf: "flex-end"
	},
	postViewStyle: {
        height: Matrics.ScaleValue(40),
		marginVertical: Matrics.ScaleValue(20),
		justifyContent: "center",
		flexDirection: "column",
		margin: 10,
		backgroundColor: Color.greyBoxBorder,
		borderRadius: 5,
		padding: 10
	},
	textStyle: {
		color: 'white'
	}
});
module.exports = styles;
