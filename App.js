import React from "react";
import { View, KeyboardAvoidingView, StatusBar, Platform, StyleSheet, Toolbar } from "react-native";
import { StackNavigator } from "react-navigation";
import LoginPage from "./pages/LoginPage";
import PlanosPage from "./pages/PlanosPage";
import Styles, { Variables } from "./styles";

const RootStack = StackNavigator({
    Login: { screen: LoginPage },
    Planos: { screen: PlanosPage },
}, {
    navigationOptions: {
        headerTintColor: "#fff",
        headerMode: "screen",
        headerStyle: {
            backgroundColor: Variables.colors.primary,
            height: 56
        }
    }
});

export default class App extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={Styles.container} behavior="padding">
                <RootStack />
            </KeyboardAvoidingView>
        );
    }
}