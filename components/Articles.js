import dateFormat from 'dateformat';
// React
import React, { Component } from "react";
import { View } from "react-native";
// Styles
import styles from './styles';
// Toolkit
import { Text, Avatar, Badge, Tile} from "react-native-elements";

export default class Articles extends Component {
  constructor(props) {
    super(props);
    console.log("props ", props);
  }

  renderAuthor(author, i) {
    const hasComma = author.name.indexOf(",") !== -1;
    const [fullName, newspaper = ""] = author.name.split(",");
    let name = hasComma ? fullName : author.name;
    let initials = name
      .split(" ")
      .map(n => n[0])
      .join(".");

    console.log("initials ", initials, newspaper);

    return (
      <View key={`author-${i}`} style={styles.row}>
        <Avatar
          small
          rounded
          title={initials}
          onPress={() => console.log("Go to author page", author.path)}
          activeOpacity={0.7}
        />
        <Text>
          {name}
          {newspaper && `, ${newspaper}`}
        </Text>
      </View>
    );
  }

  renderTags(section, i) {
    return (
      <Badge 
      key={`tag-${i}`} 
      value={section} 
      textStyle={{ color: "#fff" }} />
    );
  }

  renderHeader({title, date, author}){
    const Authors = author.map((o, i) => this.renderAuthor(o, i));
    const storyDate = dateFormat(date.published, "dddd, mmmm d, yyyy h:MM:ss TT Z");
    console.log("storyDate ", storyDate);
   
    return (
      <View>
        <Text h4>{title}</Text>
        <Text>{storyDate}</Text>
        {Authors && Authors}
      </View>
    );
  }

  renderItem(response, i) {
    const {
      excerpt,
      description,
      taxonomy,
      origin,
      media: { image: { thumbnail } }
    } = response;

    const Tags = taxonomy.section.map((o, i) => this.renderTags(o, i));

    return (
      <View key={`article-${i}`} >
        {this.renderHeader(response)}
        <Tile
        imageSrc={{uri: thumbnail}}
        title={description}
        featured
        caption={origin}
        />
        <View style={styles.row}>{Tags && Tags}</View>
        {/* <Text>{excerpt}</Text> */}
      </View>
    );
  }

  render() {
    const { response } = this.props;
    const ArticleList = response.map((o, i) => this.renderItem(o, i));

    return <View>{(ArticleList && ArticleList) || <Text>Sorry.</Text>}</View>;
  }
}
