import { Matrics, Color } from "../../common/styles";

export default (styles = {
	mainContainer: {
		flex: 1
	},
	viewContainerStyle: {
		flex: 1,
		margin: 15,
		backgroundColor: Color.greyBoxBorder,
		borderRadius: 10
	},
	buttonOuterViewStyle: {
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
		color: 'white',
		padding: 5
	}
});
module.exports = styles;
