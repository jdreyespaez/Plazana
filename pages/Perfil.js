import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class Perfil extends React.Component {
  //S7: Pantalla de Perfil para mostrar al abrir el botón Abrir Perfil
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile!</Text>
      </View>
    );
  }
}
