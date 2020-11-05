import React from "react";
import { Text, View, StyleSheet, } from "react-native";
import { Color } from "../../common/styles";

const PostDetailComponents = ({ postDetail }) => {
	return (
		<View style={styles.viewContainerStyle}>
			<Text numberOfLines={1} style={styles.textStyle}><Text style={{ fontWeight: 'bold' }}>User Name: </Text>{postDetail.name}</Text>
			<Text style={styles.textStyle}><Text style={{ fontWeight: 'bold' }}>Comment: </Text>{postDetail.body}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewContainerStyle: {
		flex: 1,
		margin: 15,
		backgroundColor: Color.greyBoxBorder,
		borderRadius: 10
	},
	textStyle: {
		color: 'white',
		padding: 5
	}
});

export default PostDetailComponents;
