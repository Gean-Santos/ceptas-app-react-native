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

export default class CadastrarEntidadeApreensao extends Component {
    constructor(){
        super()
        this.state ={
            tipoEntidadeApreensao: '',
            nomeEntidadeApreensao: '',
        }
    }
    async onSendDocumento(dados){
        await api.post('/entidadesApreensao/registrar',JSON.stringify(dados))
        .then(()=> Alert.alert('Entidade de Apreensão cadastrada com sucesso!'))
        .then(()=> this.props.navigation.navigate('OutrosDados'))
        .catch(()=>Alert.alert('Erro', 'Dados incorretos, verifique os campos'))
    }
    componentDidMount(){
        
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
                    resizeMode='contain' />
                </View>
                <View style={styles.appContainer}>
                    <View style={styles.titulo}>
                        <Text style={styles.texto}>Cadastrar Entidade Apreensão</Text>
                    </View>
                    <TextInput placeholder='Tipo de Entidade de Apreensão' style={styles.input} 
                    placeholderTextColor='#FFF'
                    autoCorrect={false}
                    value={this.state.tipoEntidadeApreensao}
                    onChangeText={tipoEntidade =>this.setState({tipoEntidadeApreensao: tipoEntidade})}
                    />
                    <TextInput placeholder='Nome da Entidade de Apreensão' style={styles.input} 
                    placeholderTextColor='#FFF'
                    autoCorrect={false}
                    value={this.state.nomeEntidadeApreensao}
                    onChangeText={nomeEntidade =>this.setState({nomeEntidadeApreensao: nomeEntidade})}
                    />
                    <View style={styles.viewBotoes}>
                        <TouchableOpacity  style={styles.botoes}
            	        onPress={() => this.props.navigation.navigate('OutrosDados')}>
        	  	            <Text style={styles.textBotoes}>Voltar</Text>
         	            </TouchableOpacity>
        	            <TouchableOpacity  style={styles.botoes}
                        onPress={() => this.onSendDocumento(this.state)}>
                            <Text style={styles.textBotoes}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>

                </View>
                </ScrollView>
            </ImageBackground>      
        )
    }
}
