import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export class Redbutton extends Component {
  render() {
    return <Button color="red" title="click me"></Button>;
  }
}
export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 500, width: '50%' }}>
        <Redbutton />
        <Text> my first React Component</Text>
      </View>
    );
  }
}
