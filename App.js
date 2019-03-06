// S3.1: Importar lo necesario de React y RN
import React from "react";
import { Button, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

//S3.2: importar createStackNavigator, createBottomTabNavigator, createAppContainer en el proyecto
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

//S3.3: Importar las páginas que se usarán en el stack
import Inicio from "./pages/Inicio";
import Config from "./pages/Config";
import Detalles from "./pages/Detalles";
import Perfil from "./pages/Perfil";

//S3.4: Se crea el InicioStack usando createStackNavigator
const InicioStack = createStackNavigator(
  {
    //Definición de la Navegación para el Inicio
    Inicio: { screen: Inicio },
    Detalles: { screen: Detalles }
  },
  {
    defaultNavigationOptions: {
      //El color particular del header para Plazana
      headerStyle: {
        backgroundColor: "#00c2d7"
      },
      //El título en el Header
      headerTintColor: "#4a5f70",
      title: "Inicio"
    }
  }
);

//S3.5: Se crea el ConfigStack usando createStackNavigator
const ConfigStack = createStackNavigator(
  {
    //Definición de la Navegación para la pantalla de Detalles
    Config: { screen: Config },
    Detalles: { screen: Detalles },
    Perfil: { screen: Perfil }
  },
  {
    defaultNavigationOptions: {
      //El color particular del header para Plazana
      headerStyle: {
        backgroundColor: "#00c2d7"
      },
      //El título en el Header
      headerTintColor: "#4a5f70",
      title: "Configuración"
    }
  }
);

//S3.6: Creando el navegador del footer
const App = createBottomTabNavigator(
  {
    Inicio: { screen: InicioStack },
    Config: { screen: ConfigStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Inicio") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Config") {
          iconName = `ios-checkmark-circle${focused ? "" : "-outline"}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#00c2d7",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(App);
