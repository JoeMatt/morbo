// React
import React, { Component } from "react";
import { AppRegistry, Image, StyleSheet, View, ScrollView } from "react-native";
// Styles
import styles from './styles';
// Toolkit
import { Text, Button } from "react-native-elements";
// Components
import Articles from './Articles';
import { StackNavigator } from "react-navigation";

const ENDPOINT = `http://projects.hearstnp.com/open/api/v1/article.php?id=12247734,12247132,12247986&key=1temp-public-key-09`;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Hearst Newspapers'
  };

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
    const { navigate } = this.props.navigation; 
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
      <ScrollView>
        <Button onPress={ () => { navigate("Article"); }  } title="View Article" color="#111111" />
        <Articles {...data} { ...this.props }/>
      </ScrollView>
    </View>
    );
  }
}
