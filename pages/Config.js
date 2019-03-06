import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class Config extends React.Component {
  //S8: Configurando la pantalla que muestra la Configuración
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginTop: 50, fontSize: 25 }}>Configuración!</Text>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Inicio")}
          >
            <Text>Ir a Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Detalles")}
          >
            <Text>Abrir Detalle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Perfil")}
          >
            <Text>Abrir Perfil</Text>
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
