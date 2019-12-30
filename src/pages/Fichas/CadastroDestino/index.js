import React, { Component } from 'react'
import { 
    View, 
    Text, 
    TextInput, 
    KeyboardAvoidingView, 
    ImageBackground, 
    StatusBar, 
    Image, 
    Picker, 
    TouchableOpacity,
    Alert, ScrollView
} from 'react-native';
import DatePicker from 'react-native-datepicker';

import styles from './styles';
import bgceptas from '../../../images/background1.png';
import ban from '../../../images/logo2.png';
import api from '../../../services/axios';


export default class CadastroDestino extends Component {
    constructor(){
        super();
        this.state = {
            descricaoDestino: '',
            tipoDestino: '',
            dataSaida:'',
            estadoAnimal:'',
            idAnimal:'',
            animais:[],
            animal:'',
        }
    }
    componentDidMount(){
        api.get('/animais/')
        .then(result => result.data.animais)
        .then(data => this.setState({animais:data}))
    }
    onSendDestino = dados=>{
        api.post('/destinos/registrar',JSON.stringify({
           descricaoDestino: dados.descricaoDestino,
           tipoDestino: dados.tipoDestino,
           dataSaida: dados.dataSaida,
           estadoAnimal: dados.estadoAnimal,
           idAnimal: dados.idAnimal,
        }))
        .then(()=>Alert.alert('Sucesso', 'Cadastrado com sucesso'))
        .then(()=>this.props.navigation.navigate('Cadastros'))
        .catch((err)=>Alert.alert('Erro', 'Verifique se todos os campos foram preenchidos'))
    }
  render() {
    return (
         
        <KeyboardAvoidingView
        behavior='position'
        enabled={Platform.OS === 'ios'}
        style={{height: '100%', width:'100%'}}
        >
            <StatusBar backgroundColor='rgba(93, 32, 134, 0.9 )' /> 
            <ImageBackground source={bgceptas} style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.viewPrincipal}>
                        <View style={styles.viewBanner}>
                            <Image source={ban} style={styles.banner} 
                            resizeMethod='resize' resizeMode='contain'/>
                        </View>
                        <View style={styles.appContainer}>
                                <View style={styles.titulo}>
                                    <Text style={styles.texto}>Cadastro de Destino</Text>
                                </View>
                                <TextInput placeholder='Descrição do Destino' style={styles.input} 
                                    placeholderTextColor='#FFF'
                                    autoCorrect={false}
                                    multiline={true}
                                    onChangeText={destino => this.setState({descricaoDestino:destino})} 
                                    value={this.state.descricaoDestino}
                                />
                                <TextInput placeholder='Tipo de Destino' style={styles.input} 
                                    placeholderTextColor='#FFF'
                                    autoCorrect={false}
                                    onChangeText={tipo => this.setState({tipoDestino:tipo})} 
                                    value={this.state.tipoDestino}
                                />
                                <View style={styles.viewPicker}>
                                    <Text style={styles.ViewPickerText}>Marcação Animal: </Text>
                                    <Picker
                                    selectedValue={this.state.animal}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) =>
                                    this.setState({idAnimal:itemIndex, animal:itemValue})
                                }>
                                    <Picker.Item label="Selecione" value="" />
                                    {this.state.animais.map(animal =>
                                        <Picker.Item label={animal.marcacao} 
                                        value={animal.id_animal}  
                                        key={animal.id_animal}/>)
                                    }
                                    </Picker>
                                </View>

                                <TextInput placeholder='Estado do Animal' style={styles.input} 
                                    placeholderTextColor='#FFF'
                                    autoCorrect={false}
                                    onChangeText={estado => this.setState({estadoAnimal:estado})} 
                                    value={this.state.estadoAnimal}
                                />

                                <View style={styles.viewDatePicker}>
                                <Text style={styles.ViewPickerText}>Data de Saída</Text>
                                <DatePicker
                                style={styles.datePicker}
                                date={this.state.dataSaida}
                                mode='date'
                                placeholder='Selecione'
                                format='YYYY/MM/DD'
                                minDate='1999/01/01'
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                customStyles={{
                                    dateIcon: {
                                        display: 'none',
                                    },
                                    dateInput: {
                                        fontSize: 18,
                                        borderWidth: 0,
                                    },
                                    dateText:{
                                        color: '#FFF',
                                        fontWeight:'bold'
                                    }
                                }}
                                onDateChange={(date) => {this.setState({dataSaida:date})}}
                                />
						        </View>


                                
                        
                                    <View style={styles.viewBotoes}>
                                        <TouchableOpacity style={styles.botoes} 
                                        onPress={() => this.props.navigation.navigate('Cadastros')}>
                                        <Text style={styles.textBotoes}>Cancelar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.botoes}
                                        onPress={() => this.onSendDestino(this.state)}>
                                        <Text style={styles.textBotoes}>Cadastrar</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
  }
}
