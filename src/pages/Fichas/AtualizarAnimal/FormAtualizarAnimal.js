import React, { Component } from 'react';
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
    Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';

import styles from './styles';
import bgceptas from '../../../images/background1.png';
import ban from '../../../images/logo2.png';
import api from '../../../services/axios';

const initialState = {
    id_especie:'',
    sexo_animal:'',
    idade_estimada: '',
    data_idade_estimada:'',
    ds_maturidade:'',
    risco_extincao:'',
    marcacao:'',
    especie:'',
    especies:[]
}

export default class FormAtualizarAnimal extends Component {
    state = initialState;
    onSendAnimais = (dados)=>{
        console.log(JSON.stringify(dados))
        try {
            api.put(`/animais/${dados.id_animal}`,JSON.stringify({
            
                sexo: dados.sexo_animal,
                dataIdadeEstimada: dados.dt_idade_estimada,
                idadeEstimada: dados.idade_estimada,
                marcacao: dados.marcacao,
                maturidade:dados.ds_maturidade,
                riscoExtincao: dados.risco_extincao,
                idEspecie: dados.id_especie
                
            }))
            .then(() => Alert.alert('Mensagem','Atualizado com sucesso'))
            .then(()=>this.props.navigation.navigate('ConsultaAnimal'))
            .catch((err)=>Alert.alert('Erro', JSON.stringify(err)))
        } catch (error) {
            Alert.alert('Erro', `Falha ao acessar servidor`)
        } 
    }
    
    
    componentDidMount (){
        this.setState(this.props.animal)
        api.get('/especies/todos')
        .then(result => result.data.data)
        .then(data => this.setState({especies:data}))
        .catch((err) => Alert.alert(JSON.stringify(err)))
        console.log(this.state)
    }
    render(){
        return (
            <KeyboardAvoidingView
            behavior='position'
            enabled={Platform.OS === 'ios'}
            style={{height: '100%', width:'100%'}}
            >
                <StatusBar backgroundColor='rgba(93, 32, 134, 0.9 )' /> 
                <ImageBackground source={bgceptas} style={styles.container}>
                    <ScrollView style={{width:'100%'}}>
                        <View style={styles.principal}>
                            <View style={styles.viewBanner}>
                                <Image source={ban} style={styles.banner}
                                resizeMethod='resize' resizeMode='contain' />
                            </View>
        
                            <View style={styles.appContainer}>
                                <View style={styles.titulo}>
                                    <Text style={styles.texto}>{this.props.titulo}</Text>
                                </View>
                                <View style={styles.viewPicker}><Text style={styles.ViewPickerText}>Espécie: </Text>
                                    <Picker
                                    selectedValue={this.state.id_especie}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) =>
                                    this.setState({id_especie:itemIndex, especie:itemValue})
                                }>
                                    <Picker.Item label="Selecione" value="" />
                                    {this.state.especies.map(especie =>
                                        <Picker.Item label={especie.ds_especie} 
                                        value={especie.id_especie}  
                                        key={especie.id_especie}/>)
                                    }
                                    </Picker>
                                </View>
                                <TextInput placeholder='Marcação' style={styles.input} 
                                placeholderTextColor='#FFF'
                                autoCorrect={false}
                                onChangeText={marcacao => this.setState({marcacao:marcacao})} 
                                value={this.state.marcacao}
                                />
                                <View style={styles.viewPicker}><Text style={styles.ViewPickerText}>Idade Estimada - Data: </Text>
                                <DatePicker
                                style={styles.datePicker}
                                date={this.state.dt_idade_estimada}
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
                                onDateChange={(date) => {this.setState({dt_idade_estimada:date})}}
                                />
                                </View>
                                <TextInput placeholder='Idade Estimada' style={styles.input} 
                                placeholderTextColor='#FFF'
                                autoCorrect={false}
                                keyboardType={'numeric'}
                                onChangeText={idadeEstimada => this.setState(
                                {idade_estimada: idadeEstimada})} 
                                value={this.state.idade_estimada}
                                />
                                <View style={styles.viewPicker}>
                                    <Text style={styles.ViewPickerText}>Sexo:      </Text>
                                    <Picker
                                    selectedValue={this.state.sexo_animal}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) =>
                                    this.setState({sexo_animal:itemValue})
                                    }>
                                        <Picker.Item label="Selecione" value="" />
                                        <Picker.Item label="Macho" value="M" />
                                        <Picker.Item label="Fêmea" value="F" />
                                        <Picker.Item label="Indeterminado" value="I" />
                                    </Picker>
                                </View>
                                <View style={styles.viewPicker}><Text style={styles.ViewPickerText}>Maturidade:      </Text>
                                    <Picker
                                    selectedValue={this.state.ds_maturidade}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ds_maturidade:itemValue})
                                    }>
                                        <Picker.Item label="Selecione" value="" />
                                        <Picker.Item label="Ovo" value="ovo" />
                                        <Picker.Item label="Neonato" value="neonato" />
                                        <Picker.Item label="Filhote" value="filhote" />
                                        <Picker.Item label="Juvenil" value="juvenil" />
                                        <Picker.Item label="Sub-adulto" value="sub-adulto" />
                                        <Picker.Item label="Adulto" value="adulto" />
                                    </Picker>
                                </View>
                                <View style={styles.viewPicker}><Text style={styles.ViewPickerText}>Risco de Extinção:</Text>
                                    <Picker
                                    selectedValue={this.state.risco_extincao}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) =>
                                    this.setState({risco_extincao:itemValue})
                                    }>
                                        <Picker.Item label="Selecione" value="" />
                                        <Picker.Item label="Sim" value="S" />
                                        <Picker.Item label="Não" value="N" />
                                    </Picker>
                                </View>
                                <View style={styles.viewBotoes}>
                                    <TouchableOpacity style={styles.botoes} 
                                    onPress={()=> this.props.navigation.navigate('ConsultaAnimal')}>
                                        <Text style={styles.textBotoes}>Voltar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.botoes}
                                    onPress={() => this.onSendAnimais(this.state)}>
                                        <Text style={styles.textBotoes}>Atualizar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
        
    
}

    
        