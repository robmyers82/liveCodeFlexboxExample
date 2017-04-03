/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';

export default class livecodeapr3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text>Item 1</Text>
        </View>
        <View style={styles.content}>
            <Text>Item 2</Text>
        </View>
        <View style={styles.footer}>
            <View style={styles.footerTab1}>
                <Text>1</Text>
            </View>
            <View style={styles.footerTab2}>
                <Text>2</Text>
            </View>
            <View style={styles.footerTab3}>
                <Text>3</Text>
            </View>
            <View style={styles.footerTab4}>
                <Text>4</Text>
            </View>
            <View style={styles.footerTab1}>
                <Text>5</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
    // justifyContent: 'space-between'
  },
  header: {
    flex: 1,
    backgroundColor: '#ff0000'
  },
  content: {
    flex: 8,
    backgroundColor: '#00ff00'
  },
  footer: {
    flex: 1,
    backgroundColor: '#0000ff',
    flexDirection: 'row'
  },
  footerTab1: {
    flex: 1,
    backgroundColor: '#FFFF00'
  },
  footerTab2: {
    flex: 1,
    backgroundColor: '#FF00FF'
  },
  footerTab3: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  footerTab4: {
    flex: 1,
    backgroundColor: '#00FFFF'
  }
});

AppRegistry.registerComponent('livecodeapr3', () => livecodeapr3);
