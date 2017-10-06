// React
import React, { Component } from "react";
import { AppRegistry, Image, StyleSheet, View, ScrollView } from "react-native";
import styles from './styles';
import { Text, Button } from "react-native-elements";

export default class Home extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button
                    onPress={() => navigate('Sports')}
                    title="Visit the Sports Page"
                />
                <Button
                    onPress={() => navigate('Article')}
                    title="Visit the Article Page"
                />
            </View>
        );
    }
}
