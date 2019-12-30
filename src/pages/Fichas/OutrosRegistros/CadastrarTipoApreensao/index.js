import React, { Component } from 'react'
import { 
    Alert,
    Text, 
    View, 
    Image, 
    ImageBackground, 
    TextInput,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from 'react-native'

import styles from './styles'
import banner from '../../../../images/logo2.png';
import background from '../../../../images/background1.png';

import api from '../../../../services/axios';

export default class CadastrarTipoApreensao extends Component {
    constructor(){
        super()
        this.state ={
            tipoApreensao: '',
        }
    }
    async onSendTipoApreensao(dados){
        await api.post('/tiposApreensao/registrar',JSON.stringify(dados))
        .then(()=> Alert.alert('Tipo de apreensão cadastrado com sucesso!'))
        .then(()=> this.props.navigation.navigate('OutrosDados'))
        .catch(()=>Alert.alert('Erro', 'Dados incorretos, verifique os campos'))
    }
    render() {
        return (
            <ImageBackground source={background} 
            style={styles.container} resizeMode='cover'>
                <StatusBar backgroundColor='rgba(93, 32, 134, 0.9 )' />  
                <ScrollView>
                <View style={styles.viewBanner}>
                    <Image source={banner} style={styles.banner} 
                    resizeMethod='resize' 
                    resizeMode='contain'/>
                </View>
                <View style={styles.appContainer}>
                    <View style={styles.titulo}>
                        <Text style={styles.texto}>Cadastrar Tipo de Apreensão</Text>
                    </View>
                    <TextInput placeholder='Tipo de apreensão' style={styles.input} 
                    placeholderTextColor='#FFF'
                    autoCorrect={false}
                    value={this.state.tipoApreensao}
                    onChangeText={tipo =>this.setState({tipoApreensao:tipo})}
                    />
                    <View style={styles.viewBotoes}>
                        <TouchableOpacity  style={styles.botoes}
            	        onPress={() => this.props.navigation.navigate('OutrosDados')}>
        	  	            <Text style={styles.textBotoes}>Voltar</Text>
         	            </TouchableOpacity>
        	            <TouchableOpacity  style={styles.botoes}
                        onPress={() => this.onSendTipoApreensao(this.state)}>
                            <Text style={styles.textBotoes}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </ImageBackground>      
        )
    }
}
