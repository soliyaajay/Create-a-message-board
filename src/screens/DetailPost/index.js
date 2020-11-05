import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles";
import {PostDetailComponents} from "../../components";
class PostDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postDetail: this.props.route.params.postDetail,
			commentList: []
		};
	}

	// ------ React Lifecycles ------ //
	componentWillMount() {
		this.getPostDetail(this.state.postDetail.id);
	}

	componentDidMount() {
		this.props.navigation.setOptions({
			title: this.state.postDetail.title,
			headerRight: () =>
				null
		})
	}


	// ------ Get Post List ------ //
	getPostDetail = (postId) => {
		return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ commentList: responseJson });
			})
			.catch((error) => {
				console.error(error);
			});
	}

	// ------ React render method ------ //
	render() {
		const { postDetail, commentList } = this.state;
		return (
			<View style={styles.mainContainer}>
				<Text style={{ margin: 15, }}>{postDetail.body}</Text>
				{commentList.length > 0 &&
					<FlatList
						style={styles.list}
						onEndReachedThreshold={0.9}
						data={commentList}
						renderItem={({ item, index }) => (
							<PostDetailComponents postDetail={item}/>
						)}
					/>
				}
			</View>
		);
	}
}

export default PostDetail;
