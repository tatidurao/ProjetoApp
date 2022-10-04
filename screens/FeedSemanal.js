import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class FeedSemanal extends Component {
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
             marginTop: "60%"
          }}>
          Tela mostrar Dietas
        </Text>
      </View>
    );
  }
}
