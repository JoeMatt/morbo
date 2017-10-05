// React
import React, { Component } from "react";
import { AppRegistry, Image, StyleSheet, View } from "react-native";
// Styles
import styles from './components/styles';
// Toolkit
import { Text } from "react-native-elements";
// Components
import Articles from './components/Articles';

const ENDPOINT = `http://projects.hearstnp.com/open/api/v1/article.php?id=12247734,12247132,12247986&key=1temp-public-key-09`;

export default class App extends Component {
  state = {
    data: null
  };

  async componentDidMount() {
    console.log("App loaded");
    const res = await fetch(ENDPOINT);
    const data = await res.json();
    console.log("data ", data);

    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    if (!data) {
      return (
        <View style={styles.container}>
          <Text h3>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text h4>Articles.</Text>
        <Articles {...data} { ...this.props }/>
      </View>
    );
  }
}

