import React from "react";
import { TouchableOpacity, Text, View, ImageBackground, Image, TextInput, Switch } from "react-native";
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
        height: 200,
        padding: 10
    },
    loginButton: {
        marginTop: 20
    },
    remember: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "flex-end"
    },
    labelRemeber: {
        color: "#FFFFFF",
        marginTop: 3
    }
}

export default class LoginPage extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        // Armazena as referências dos inputs para fácil transição entre eles, como utilizar o tab no teclado
        this.inputs = {};

        // Cria o state do componente
        this.state = {
            cpf: {},
            senha: {},
            lembrar: false
        };

        // Realiza o bind das funções do componente
        this.focusNextField = this.focusNextField.bind(this);
        this.login = this.login.bind(this);
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }

    login() {
        if(this.state.cpf == "123" && this.state.senha == "123")
            this.props.navigation.navigate('Planos');
        else
            alert("CPF ou senha incorretos!");
    }

    render() {
        return (
            <ImageBackground source={require("../assets/Login-bg.jpg")} style={[Styles.backgroundImage, loginStyles.container]}>
                <View style={[Styles.content, loginStyles.content]}>
                    <Image source={require("../assets/Logo.png")} style={loginStyles.logo} />
                </View>

                <View style={loginStyles.footer}>
                    <TextInput name={"cpf"} style={Styles.textInput} placeholder="CPF" returnKeyType="next" blurOnSubmit={false} underlineColorAndroid="transparent"
                               onSubmitEditing={() => { this.focusNextField('senha'); }} onChangeText={value => this.setState({ cpf: value })}
                               ref={input => { this.inputs['cpf'] = input; }}/>

                    <TextInput name={"senha"} style={Styles.textInput} placeholder="Senha" returnKeyType="done" secureTextEntry={true}
                               ref={input => { this.inputs['senha'] = input; }} onChangeText={value => this.setState({ senha: value })} />

                    <View style={loginStyles.remember}>
                        <Text style={loginStyles.labelRemeber}>Lembrar-me</Text>
                        <Switch value={this.state.lembrar} thumbTintColor={Variables.colors.primary} 
                                onValueChange={value => this.setState({ lembrar: value })} />
                    </View>

                    <TouchableOpacity style={[Styles.button, loginStyles.loginButton]} onPress={this.login}>
                        <Text style={Styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}