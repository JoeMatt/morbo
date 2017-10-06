// React
import React, { Component } from "react";
import { AppRegistry, Image, StyleSheet, View, ScrollView } from "react-native";
// Styles
import styles from './components/styles';
// Toolkit
import { Text, Button } from "react-native-elements";
// Components
import HomeScreen from './components/HomeScreen';
import ArticleScreen from './components/ArticleScreen';
import { StackNavigator } from "react-navigation";

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Article: { screen: ArticleScreen }
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}
