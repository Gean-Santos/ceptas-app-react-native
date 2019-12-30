import React, { Component } from 'react'
import { 
    View, 
    Text, 
    Button,
    TextInput, 
    KeyboardAvoidingView, 
    ImageBackground, 
    StatusBar, 
    Image, 
    Picker, 
    TouchableOpacity,
    Alert
} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import {TextInputMask} from 'react-native-masked-text'
import ImagePicker from 'react-native-image-picker'

import styles from './styles';
import bgceptas from '../../../images/background1.png';
import ban from '../../../images/logo2.png';
import api from '../../../services/axios';

export default class FormComplemento extends Component {
    constructor(){
        super();
        this.state = {
            logradouro: '',
            tipo_endereco:'',
            numero:'',
            uf:'',
            localidade: '',
            bairro: '',
            cep: '',
            colocaDados: null,
        }
    }
    componentDidMount(){
        const {pessoa} =this.props.ir.state.params; 
        this.setState(
            {nome:pessoa.nome, 
            tipo_pessoa:pessoa.tipoPessoa, 
            telefone:pessoa.telefone, 
            genero:pessoa.genero, 
            email:pessoa.email,
            tipoDocumento:pessoa.tipoDocumento,
            numeroDocumento:pessoa.numeroDocumento})
    }
    
       onColocaDados = async()=>{
        console.log(this.state)
           this.setState(
               {
                   colocaDados: (
                        <View style={styles.viewDados}>
                            <Text style={styles.textoDados}>Endereço:  {this.state.logradouro}</Text>
                            <Text style={styles.textoDados}>Bairro:  {this.state.bairro}</Text>
                            <Text style={styles.textoDados}>Município:  {this.state.localidade}</Text>
                            <Text style={styles.textoDados}>Estado:  {this.state.uf}</Text>
                        </View>
                    )
                }
            )
       }
    handleCEP = async(valor) =>{
        console.log(valor)
        valor = valor['cep']
        try {
            await fetch(`http://www.viacep.com.br/ws/${valor}/json`,{
                method: 'GET'
        })
        .then(response => response.json())
        .then(dados => this.setState(dados))
        .then(()=> this.onColocaDados())
        .catch(e => Alert.alert('Erro', 'Digite um CEP válido'))
        } catch (error) {
            Alert.alert('Erro', 'Verifique a conexão')
        }
    }

    async onSendPessoa(dados){
        await api.post('/documentos/registrar', JSON.stringify({
            tipoDocumento: dados.tipoDocumento,
            numeroDocumento: dados.numeroDocumento,
        }))
        .then(doc =>{
            api.post('/registrar/pessoa', JSON.stringify({
                nome: dados.nome,
                tipo_pessoa:dados.tipo_pessoa,
                email: dados.email,
                genero: dados.genero,
                telefone: dados.telefone,
                endereco: dados.logradouro,
                tipo_endereco: dados.tipo_endereco,
                cep: dados.cep,
                bairro: dados.bairro,
                cidade: dados.localidade,
                uf: dados.uf,
                id_documento: doc.data
            })
            )
            .then(()=> this.props.ir.navigate('CadastroFuncionario'))
            .catch(err => Alert.alert('Erro', 'Verifique os Dados'))
        })
        .catch(err => Alert.alert('Problema ao registrar documento', 'Documento já Cadastrado ou falha na Conexão'))
    }
    
    render() {
        const {cep} = this.state;
        return (
            
            <KeyboardAvoidingView
            behavior='position'
            enabled={Platform.OS === 'ios'}
            style={{height: '100%', width:'100%'}}
            >
                <StatusBar backgroundColor='rgba(93, 32, 134, 0.9 )' /> 
                <ImageBackground source={bgceptas} style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.viewBanner}>
                            <Image source={ban} style={styles.banner} />
                        </View>
        
                        <View style={styles.appContainer}>
                            <View style={styles.titulo}>
                                <Text style={styles.texto}>Dados Complementares:</Text>
                            </View>
                            <View style={styles.viewDados}>
                                <View style={styles.viewPicker}>
                                    <Text style={styles.ViewPickerText}>Tipo de endereco</Text>
                                    <Picker
                                        selectedValue={this.state.tipo_endereco}
                                        style={styles.picker}
                                        onValueChange={(itemValue, itemIndex) =>
                                        this.setState({tipo_endereco:itemValue})}>
                                        <Picker.Item label="Selecione" value="" />
                                        <Picker.Item label="Residencial" value="Residencial" />
                                        <Picker.Item label="Comercial" value="Comercial" />
                                        <Picker.Item label="Local de Trabalho" value="Trabalho" />
                                    </Picker>
                                </View>

                                <View style={styles.viewCep}>
                                    {/* <TextInput placeholder='CEP' style={styles.inputCep} 
                                        placeholderTextColor='#FFF'
                                        autoCorrect={false}
                                        onChangeText={cep => this.setState({cep})} 
                                        value={this.state.cep}
                                    /> */}
                                    <TextInputMask
                                    style={styles.inputCep}
                                    type={'zip-code'}
                                    value={this.state.cep}
                                    onChangeText={text => {
                                        this.setState({
                                        cep: text
                                        })
                                    }}
                                    />
                                    <TouchableOpacity style={styles.botaoCep} 
                                        onPress={() => this.handleCEP({cep})}>
                                        <Text style={styles.textBotoes}>Consultar</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>{this.state.colocaDados }</View>
                                <TextInput
                                style={styles.input}
                                placeholder='Número:'
                                placeholderTextColor='#FFF'
                                value={this.state.numero}
                                onChangeText={numero => this.setState({ numero })}
                                />
                                
                                
                            </View>
                            <View style={styles.viewBotoes}>
                                    <TouchableOpacity style={styles.botoes} 
                                        onPress={() => this.props.ir.navigate('CadastrarPessoa')}>
                                        <Text style={styles.textBotoes}>Voltar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.botoes}
                                        onPress={() => this.onSendPessoa(this.state)}>
                                        <Text style={styles.textBotoes}>Avançar</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }
}