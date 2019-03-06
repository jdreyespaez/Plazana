import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class Inicio extends React.Component {
  //S6: Pantalla de Inicio para mostrar en la opción Inicio
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginTop: 50, fontSize: 25 }}>Inicio!</Text>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Config")}
          >
            <Text>Ir a la sección Configuración</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Detalles")}
          >
            <Text>Abrir la pantalla Detalles</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 16
  }
});
