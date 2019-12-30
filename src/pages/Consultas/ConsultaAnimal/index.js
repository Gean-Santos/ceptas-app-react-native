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
import {ScrollView} from 'react-native-gesture-handler';
import FormConsult from './FormConsulta';
import styles from './styles';
import api from '../../../services/axios'
import back from '../../../images/background1.png';
import ban from '../../../images/logo2.png';

export default class ConsultaAnimal extends Component {
    initialState = {
        animais:[],
        marcacao:'', 
        animal:''
    }
    
    constructor(){
        super()
        this.state = this.initialState
    }
    async componentDidMount(){
        await api.get('/animais/todos')
        .then(res => this.setState({animais:res.data.animais}))
        
    }
    async onSetAnimal(marcacao){
        this.setState({marcacao})
    }
    async onSearchAnimal(marcacao){
        try {
            await api.post('/animais/animal',JSON.stringify(marcacao))
            .then(res => this.props.navigation.navigate('ConsultaDetalhada', 
            {animais:res.data}))
            .catch(() => Alert.alert('Erro', 'Digite uma marcação válida'))
        } catch (error) {
            Alert.alert('Erro','Digite uma marcação válida')
        }
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
							<Text style={styles.textoTitulo}>Animais</Text>
        				</View>
                <TextInput 
                    style={styles.inputMarcacao}
                    placeholder='Digite a Marcação do Animal'
                    placeholderTextColor='#FFF'
                    value={this.state.marcacao} 
                    onChangeText={marcacao => this.setState({marcacao: marcacao})}
                />
                <View style={styles.viewBotoes}>
                <TouchableOpacity style={styles.botao}
                    onPress={() => this.onSearchAnimal({marcacao:this.state.marcacao})}>
                    <Text style={styles.textoBotao}>Consultar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}
                    onPress={() => this.props.navigation.navigate('Consultas')}>
                    <Text style={styles.textoBotao}>Voltar</Text>
                </TouchableOpacity>
                </View>
                
                <View style={styles.flat}>
                    
                        <FlatList 
                        style={{width: '100%', height: '100%', 
                        alignContent:'center', marginBottom: '80%'}}
                        data={this.state.animais}
                        keyExtractor={item => `${item.id_animal}`}
                        renderItem={({ item }) => 
                            <View style={styles.center}>
                                <TouchableOpacity 
                                onPress={() =>this.onSetAnimal(item.marcacao)}
                                style={{width:'75%'}}>
                                    <FormConsult {...item}/>
                                </TouchableOpacity> 
                            </View>} 
                        />
                    
                </View>
                
                            
            </ImageBackground> 
            </View>
        
        
    );
    }
    
}
