import React, {Component} from 'react';
import {
    View, 
    Text,
    TextInput,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    Image,
    FlatList,
    Alert,
} from 'react-native';
import FormConsult from './FormConsulta';
import styles from './styles';
import api from '../../../services/axios'
import back from '../../../images/background1.png';
import ban from '../../../images/logo2.png';

export default class ConsultaDestino extends Component {
    initialState = {
        destinos:[],
        id:''
    }
    
    constructor(){
        super()
        this.state = this.initialState
    }
    async componentDidMount(){
        await api.get('/destinos/todos')
        .then(res => this.setState({destinos:res.data.destinos}))   
    }
    render(){
        return (
            <View> 
            <StatusBar backgroundColor='rgba(93, 32, 134, 0.9 )' />
            <ImageBackground source={back} style={styles.container}
            resizeMode='cover'>
                <View style={styles.viewBanner}>
                    <Image source={ban} style={styles.banner} />
                </View>
                <View style={styles.viewTitulo}>
							<Text style={styles.textoTitulo}>Destinos</Text>
        				</View>
                <View style={styles.flat}>
                <FlatList 
                    style={{width: '90%'}}
                    data={this.state.destinos}
                    keyExtractor={item => `${item.id_destino}`}
                    renderItem={({ item }) => <FormConsult {...item}/>} />

                    <View style={styles.viewBotoes}>
                    <TouchableOpacity style={styles.botao}
                    onPress={()=>this.props.navigation.navigate('Consultas')}>
                        <Text style={styles.textoBotao}>Voltar</Text>
                    </TouchableOpacity>
                </View>
                </View>
                
                
                            
            </ImageBackground> 
            </View>
        
        
    );
    }
    
}
