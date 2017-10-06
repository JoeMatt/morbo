import dateFormat from "dateformat";
// React
import React, { Component } from "react";
import { View, Linking } from "react-native";
// Styles
import styles from "./styles";
// Toolkit
import { Text, Badge, Card, Button } from "react-native-elements";
// Components
import ImageCard from "./ImageCard";
import Author from "./Author";

export default class Articles extends Component {
  static navigationOptions = {
    title: 'Section Page'
  };

  constructor(props) {
    super(props);
    console.log("props ", props);
  }

  renderTags(section, i) {
    return (
      <Badge
        key={`tag-${i}`}
        wrapperStyle={{ padding: 3 }}
        value={section}
        textStyle={{ color: "#fff" }}
      />
    );
  }
  renderStoryDate(date) {
    const storyDate = dateFormat(
      date.published,
      "dddd, mmmm d, yyyy h:MM:ss TT Z"
    );
    console.log("storyDate ", storyDate);

    return <Text>{storyDate}</Text>;
  }

  renderHeader({ title, date, author }) {
    const Authors = author.map((author, i) => (
      <Author {...author} key={`author-${i}`} />
    ));

    return (
      <View>
        <Text h4>{title}</Text>
        {this.renderStoryDate(date)}
        {Authors && Authors}
      </View>
    );
  }

  renderItem(response, i) {
    const { taxonomy } = response;
    const { navigate } = this.props.navigation; 
    
    const Tags = taxonomy.section.map((o, i) => this.renderTags(o, i));

    return (
      <Card key={`article-${i}`}>
        {this.renderHeader(response)}
        <ImageCard {...response} />
        <View style={styles.row}>{Tags && Tags}</View>
        <Button onPress={ () => { navigate("Article"); }  } title="View Article" color="#111111" />
      </Card>
    );
  }

  render() {
    const { response } = this.props;
    const ArticleList = response.map((o, i) => this.renderItem(o, i));
    return <View>{(ArticleList && ArticleList) || <Text>Sorry.</Text>}</View>;
  }
}
