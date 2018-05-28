import React from "react";
import { TouchableOpacity, Text, View, ImageBackground, Image, TextInput } from "react-native";
import Styles, { Variables } from "../styles";

const loginStyles = {
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        padding: 50,
        alignItems: "center"
    },
    logo: {
        height: 80,
        width: 200
    },
    footer: {
        height: 150,
        padding: 10
    }
}

export default class LoginPage extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }

    render() {
        return (
            <ImageBackground source={require("../assets/Login-bg.jpg")} style={[Styles.backgroundImage, loginStyles.container]}>
                <View style={[Styles.content, loginStyles.content]}>
                    <Image source={require("../assets/Logo.png")} style={loginStyles.logo} />
                </View>

                <View style={loginStyles.footer}>
                    <TextInput style={Styles.textInput} placeholder="CPF" returnKeyType="next" blurOnSubmit={ false } underlineColorAndroid="transparent"
                               onSubmitEditing={() => { this.focusNextField('senha'); }} 
                               ref={ input => { this.inputs['cpf'] = input; }}/>

                    <TextInput style={Styles.textInput} placeholder="Senha" returnKeyType="done"
                               ref={ input => { this.inputs['senha'] = input; }} />

                    <TouchableOpacity style={Styles.button} onPress={() => this.props.navigation.navigate('Planos')}>
                        <Text style={Styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}