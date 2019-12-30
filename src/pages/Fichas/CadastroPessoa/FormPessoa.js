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
    Alert,
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text'

import {ScrollView} from 'react-native-gesture-handler';

import styles from './styles';
import bgceptas from '../../../images/background1.png';
import ban from '../../../images/logo2.png';
let cpf = ''

export default class FormPessoa extends Component {
    constructor(){
        super();
        this.state = {
            nome: '',
            tipoPessoa: '',
            tipoDocumento:'cpf',
            numeroDocumento:'',
            email: '',
            genero: '',
            telefone:'',
        }
    }
    onNextForm = dados=>{
        if(!dados.email || !dados.genero || !dados.nome 
            || !dados.telefone || !dados.tipoPessoa || !dados.tipoDocumento || !dados.numeroDocumento)
            Alert.alert('Erro', 'Verifique os campos em branco')
        else{
            this.props.ir.navigate('DadosComplementares',{pessoa:dados})
        }
            
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
                                    <Text style={styles.texto}>Cadastro de Pessoa</Text>
                                </View>
                                <TextInput placeholder='Nome' style={styles.input} 
                                    placeholderTextColor='#FFF'
                                    autoCorrect={false}
                                    onChangeText={nome => this.setState({nome:nome})} 
                                    value={this.state.nome}
                                />
                                <View style={styles.viewPicker}>
                                    <Text style={styles.ViewPickerText}>Tipo Pessoa:</Text>
                                        <Picker
                                        selectedValue={this.state.tipoPessoa}
                                        style={styles.picker}
                                        onValueChange={(itemValue, itemIndex) =>
                                        this.setState({tipoPessoa:itemValue})
                                        }>
                                            <Picker.Item label="Selecione" value="" />
                                            <Picker.Item label="Física" value="Fisica" />
                                            <Picker.Item label="Jurídica" value="Juridica" />
                                            <Picker.Item label="Outro" value="Outro" />
                                        </Picker>
                                    </View>

                                    <View style={styles.viewPicker}>
                                        <Text style={styles.ViewPickerText}>Tipo Documento:</Text>
                                        <Picker
                                        selectedValue={this.state.tipoDocumento}
                                        style={styles.picker}
                                        onValueChange={(itemValue, itemIndex) =>
                                        this.setState({tipoDocumento:itemValue})
                                        }>
                                            <Picker.Item label="Selecione" value="" />
                                            <Picker.Item label="CPF" value="cpf" />
                                        </Picker>
                                    </View>

                                    <TextInputMask
                                    placeholder='Numero do CPF'
                                    placeholderTextColor='#FFF'
                                    style={styles.input}
                                    type='cpf'
                                    value={this.state.numeroDocumento}
                                    onChangeText={text => {
                                        this.setState({
                                        numeroDocumento: text
                                        })
                                    }}
                                    />
                                    <View style={styles.viewPicker}>
                                    <Text style={styles.ViewPickerText}>Gênero:</Text>
                                        <Picker
                                        selectedValue={this.state.genero}
                                        style={styles.picker}
                                        onValueChange={(itemValue, itemIndex) =>
                                        this.setState({genero:itemValue})
                                        }>
                                            <Picker.Item label="Selecione" value="" />
                                            <Picker.Item label="Masculino" value="Masculino" />
                                            <Picker.Item label="Feminino" value="Feminino" />
                                            <Picker.Item label="Outros" value="Outros" />
                                        </Picker>
                                    </View>

                                    <TextInput placeholder='Email' style={styles.input} 
                                    placeholderTextColor='#FFF'
                                    autoCorrect={false}
                                    onChangeText={email => this.setState({email:email})} 
                                    value={this.state.email}
                                    />
                                    

                                    {/* <TextInputMask
                                    type={'cel-phone'}
                                    options={{
                                        maskType: 'BRL',
                                        withDDD: true,
                                        dddMask: '(99) '
                                    }}
                                    value={this.state.international}
                                    onChangeText={text => {
                                        this.setState({
                                        international: text
                                        })
                                    }}
                                    // add the ref to a local var
                                    ref={(ref) => this.phoneField = ref}
                                    /> */}

                                    <TextInput placeholder='Telefone' style={styles.input} 
                                    placeholderTextColor='#FFF'
                                    autoCorrect={false}
                                    onChangeText={tel => this.setState({telefone:tel})} 
                                    value={this.state.telefone}
                                    keyboardType={'numeric'}
                                    />
                        
                                    <View style={styles.viewBotoes}>
                                        <TouchableOpacity style={styles.botoes} 
                                        onPress={() => this.props.ir.navigate('Login')}>
                                        <Text style={styles.textBotoes}>Cancelar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.botoes}
                                        onPress={() => this.onNextForm(this.state)}>
                                        <Text style={styles.textBotoes}>Avançar</Text>
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
