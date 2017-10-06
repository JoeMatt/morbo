
// React
import React, { Component } from "react";
import { View, Image } from "react-native";
// Styles
import styles from './styles';
// Toolkit
import { Text, Avatar, Badge, Tile} from "react-native-elements";

export default class Gallery extends Component {
	render() {
		const element = this.props.element;
		const id = element["id"];
		const media = this.props.media;
		const images = media[id]["images"];

		const first = images[0];

    console.log("first", first);

		return (
      <View>
      <Image
        style={{width: 250, height: 250, align: 'center'}}
        source={{uri: first["url"]}}
      />
      </View>
    );
  }
}

/*
        // <Image
        //   style={{width: 50, height: 50}}
        //   source={{uri: first["url"]}}
        // />
        */