
// React
import React, { Component } from "react";
import { AppRegistry, Image, StyleSheet, View, Button, ListView } from "react-native";
import styles from './components/styles';
import { Text } from "react-native-elements";

import { StackNavigator } from 'react-navigation';

import ArticleScreen from './components/Article'
import Home from './components/Home'
import Sports from './components/Sports'
import Article from './components/Article'

const SimpleApp = StackNavigator({
    Home: { screen: Home },
    Sports: { screen: Sports },
    Article: { screen: Article }
});

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}