import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
    render() {
        let pic = {
            uri: 'https://ugc.kn3.net/i/origin/http://img1.wikia.nocookie.net/__cb20130831213334/es.futurama/images/3/3f/Morboo.jpg'
        };
        return (
            <View style={styles.container}>
                <Image source={pic} style={{width: 300, height: 250}}/>
                <Text>Hello little man. I WILL DESTROY YOU!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
