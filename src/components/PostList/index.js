import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { Matrics, Color } from "../../common/styles";

const PostList = ({ postData, onPostPress }) => {
    return (
        <TouchableOpacity style={styles.postViewStyle} onPress={onPostPress}>
            <Text style={styles.textStyle}>{postData.id}</Text>
            <Text numberOfLines={1} style={styles.textStyle}>{postData.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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

export default PostList;
