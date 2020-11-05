import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import styles from "./styles";
import {PostList} from "../../components";
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postList:[]
		};
	}

	// ------ React Lifecycles ------ //
	componentWillMount() {
		this.getPostList();
	}

	componentDidMount() {}

	// ------ Get Post List ------ //
	getPostList = () => {
		return fetch('https://jsonplaceholder.typicode.com/posts?_sort=id&_order=asc')
            .then((response) => response.json())
            .then((responseJson) => {
				this.setState({postList:responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
	}

	postDetailPress = (postDetail) => {
		this.props.navigation.navigate('DetailPost',{postDetail});
	}

	// ------ React render method ------ //
	render() {
		const {postList} = this.state;
		return (
			<View style={styles.mainContainer}>
				<View style={styles.viewContainerStyle}>
					{postList.length > 0 &&
					<FlatList
					style={styles.list}
					onEndReachedThreshold={0.9}
					data={postList}
					renderItem={({ item, index }) => (
						<PostList postData={item} onPostPress={() => {this.postDetailPress(item)}}/>
					)}
				  />
				}
				</View>
			</View>
		);
	}
}

export default Home;
