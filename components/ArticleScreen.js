// React
import React, { Component } from "react";
import { AppRegistry, Image, StyleSheet, View, ScrollView } from "react-native";
// Styles
import styles from './styles';
// Toolkit
import { Text, Button } from "react-native-elements";
// Components
import { StackNavigator } from "react-navigation";

const ENDPOINT = `http://projects.hearstnp.com/open/api/v1/article.php?id=12247734,12247132,12247986&key=1temp-public-key-09`;

export default class Article extends React.Component {
  static navigationOptions = {
    title: 'Article'
  };
  render() {
    const { navigate } = this.props.navigation; 
    return (
        <View>
            <Text>Hello, Article!</Text>
        </View>
    );
  }
}
