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

export default class CadastrarEspecie extends Component {
    constructor(){
        super()
        this.state ={
            especie: '',
            nomeCientifico:'',
            nomePopular:'',
            grupoTaxonomico:'',
        }
    }
    async onSendEspecie(dados){
        await api.post('/especies/cadastrar',JSON.stringify(dados))
        .then(()=> Alert.alert('Espécie cadastrada com sucesso!'))
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
                        <Text style={styles.texto}>Cadastrar Espécie</Text>
                    </View>
                    <TextInput placeholder='Nome Popular' style={styles.input} 
                    placeholderTextColor='#FFF'
                    autoCorrect={false}
                    value={this.state.nomePopular}
                    onChangeText={nomePopular =>this.setState({nomePopular})}
                    />
                    <TextInput placeholder='Nome Científico' style={styles.input} 
                    placeholderTextColor='#FFF'
                    autoCorrect={false}
                    value={this.state.nomeCientífico}
                    onChangeText={nomeCientifico => this.setState({nomeCientifico})}
                    />
                    <TextInput placeholder='Espécie' style={styles.input} 
                    placeholderTextColor='#FFF'
                    autoCorrect={false}
                    value={this.state.especie}
                    onChangeText={especie => this.setState({especie})}
                    />
                    <TextInput placeholder='Grupo Taxonômico' style={styles.input} 
                    placeholderTextColor='#FFF'
                    autoCorrect={false}
                    value={this.state.grupoTaxonomico}
                    onChangeText={grupoTaxonomico => this.setState({grupoTaxonomico})}
                    />
                    <View style={styles.viewBotoes}>
                        <TouchableOpacity  style={styles.botoes}
            	        onPress={() => this.props.navigation.navigate('OutrosDados')}>
        	  	            <Text style={styles.textBotoes}>Voltar</Text>
         	            </TouchableOpacity>
        	            <TouchableOpacity  style={styles.botoes}
                        onPress={() => this.onSendEspecie(this.state)}>
                            <Text style={styles.textBotoes}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </ImageBackground>      
        )
    }
}
