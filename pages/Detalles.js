import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class Detalles extends React.Component {
  //S5: Pantalla de Detalle para mostrar desde cualquier botón Abri Detalle
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Detalles!</Text>
      </View>
    );
  }
}
