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

export default class CadastrarRecinto extends Component {
    constructor(){
        super()
        this.state ={
            descricaoRecinto: '',
            localRecinto:'',
        }
    }
    async onSendRecinto(dados){
        await api.post('/recintos/registrar',JSON.stringify(dados))
        .then(()=> Alert.alert('Recinto cadastrado com sucesso!'))
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
                        <Text style={styles.texto}>Cadastrar Recinto</Text>
                    </View>
                    <TextInput placeholder='Descrição do Recinto' style={styles.input} 
                    placeholderTextColor='#FFF'
                    autoCorrect={false}
                    value={this.state.descricaoRecinto}
                    onChangeText={descricao =>this.setState({descricaoRecinto:descricao})}
                    />
                    <TextInput placeholder='Local do recinto' style={styles.input} 
                    placeholderTextColor='#FFF'
                    autoCorrect={false}
                    value={this.state.localRecinto}
                    onChangeText={local => this.setState({localRecinto:local})}
                    />
                    <View style={styles.viewBotoes}>
                        <TouchableOpacity  style={styles.botoes}
            	        onPress={() => this.props.navigation.navigate('OutrosDados')}>
        	  	            <Text style={styles.textBotoes}>Voltar</Text>
         	            </TouchableOpacity>
        	            <TouchableOpacity  style={styles.botoes}
                        onPress={() => this.onSendRecinto(this.state)}>
                            <Text style={styles.textBotoes}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </ImageBackground>      
        )
    }
}
