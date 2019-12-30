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

export default class ConsultaApreensao extends Component {
    initialState = {
        apreensoes:[],
        id:''
    }
    
    constructor(){
        super()
        this.state = this.initialState
    }
    async componentDidMount(){
        await api.get('/apreensoes/todas')
        .then(res => this.setState({apreensoes:res.data.apreensoes}))
        
    }
    // async onSearchApreensoes(id){
    //     try {
    //         await api.get(`/apreensoes/${id}`)
    //         .then(res => this.props.navigation.navigate('ConsultaDetalhada', 
    //         {animais:res.data}))
    //         .catch(() => Alert.alert('Erro', 'Digite uma marcação válida'))
    //     } catch (error) {
    //         Alert.alert('Erro','Digite uma marcação válida')
    //     }
    // }
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
							<Text style={styles.textoTitulo}>Apreensões</Text>
        				</View>
                <View style={styles.flat}>
                <FlatList 
                    style={{width: '90%'}}
                    data={this.state.apreensoes}
                    keyExtractor={item => `${item.id_apreensao}`}
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
