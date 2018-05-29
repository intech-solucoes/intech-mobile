import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Styles, { Variables } from "../styles";

const styles = {
    header: {
        marginBottom: 30,
        fontWeight: "bold"
    },
    subheader: {
        marginBottom: 40
    },
    button: {
        marginBottom: 20,
        padding: 5
    },
    buttonText: {
        fontWeight: "bold"
    }
}

export default class PlanosPage extends React.Component {
    static navigationOptions = {
        title: 'Planos',
    };

    constructor(props) {
        super(props);

        this.planos = [
            {
                key: 0,
                nome: "BD",
                situacao: "Ativo"
            },
            {
                key: 1,
                nome: "CD",
                situacao: "Assistido"
            }
        ]
    }

    renderPlanos() {
        return (
            <View>
                {
                    this.planos.map(plano => (
                        <TouchableOpacity style={[Styles.button, styles.button]} key={plano.key}>
                            <Text style={[Styles.buttonText, Styles.h2, styles.buttonText]}>{plano.nome}</Text>
                            <Text style={Styles.buttonText}>{plano.situacao}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        );
    }

    render() {
        const { params } = this.props.navigation.state;

        return (
            <View style={[Styles.content, { paddingTop: 50 }]}>
                <Text style={Styles.h3}>Olá,</Text>
                <Text style={[ Styles.h1, styles.header ]}>RONIELY SOUSA MOURA DE OLIVEIRA</Text>
                <Text style={styles.subheader}>Selecione um de seus planos contratados com a Intech</Text>

                {this.renderPlanos()}
            </View>
        );
    }
}