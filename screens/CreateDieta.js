import React, {Component} from "react";
import { Text, View } from "react-native";


export default class CreateDieta extends Component {
 

  render(){
    return(
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            marginTop: "60%",
          }}
        >Tela de criar Dieta</Text>
      </View>
    )
  }
}
