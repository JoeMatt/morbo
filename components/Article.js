// React
import React, { Component } from "react";
import { View, ScrollView } from "react-native";
// Styles
import styles from './styles';
// Toolkit
import { Text, Avatar, Badge, Tile} from "react-native-elements";

import Gallery from './Gallery'

export default class Article extends Component {
  constructor(props) {
    super(props);
    //console.log("props ", props);
  }

  renderItem(response) {
    const {
      excerpt,
      description,
      taxonomy,
      origin,
      content,
      media: { image: { thumbnail } }
    } = response;

	return (
	<ScrollView>
	{
		content.map((element, i) => {
			const type = element["type"];

			if (type == "text") {
				const content = element["content"];

				return (
				<Text>{content}</Text>
				)
			} else if (type == "gallery") {
				return <Gallery element={element} media={response["media"]}/>
			}
		})
	}
	</ScrollView>
	);
  }

  render() {
 	let data = require('../data/article_12257387.json');

 	let status = data['status'];
 	let code = status['code'];

 	let response = data['response'][0];

 	const articleRender = this.renderItem(response);

    return <View>{(articleRender && articleRender) || <Text>Sorry.</Text>}</View>;
  }
}