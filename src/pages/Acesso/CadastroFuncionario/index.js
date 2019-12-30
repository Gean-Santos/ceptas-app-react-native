import React, { useState } from 'react';
import {
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  StatusBar,
  Alert
} from 'react-native';

import DatePicker from 'react-native-datepicker';

import styles from './styles';
import api from '../../../services/axios'

import bgceptas from '../../../images/background1.png';
import ban from '../../../images/logo2.png';
import { ScrollView } from 'react-native-gesture-handler';

export default function CadastroFuncionario({navigation}) {

  	const [login, setLogin] = useState('');
  	const [senha, setSenha] = useState('');
  	const [chefe, setChefe] = useState('');
  	const [matricula, setMatricula] = useState('');
	const [email, setEmail] = useState('');
  	const [id_pessoa, setIdPessoa] = useState('');
  	const [dataAdmissao, setDataAdmissao] = useState('');
  	const [dataNascimento, setDataNascimento] = useState('');
  	const [cargo, setCargo] = useState('');

  	function handleLogin(){ 
    	navigation.navigate('Login')
  	}
   	function verificaEmail(email){
	 	api.get(`/pessoa/${email}`)
		.then(res => setIdPessoa(JSON.stringify(res.data.id_pessoa)))
		.then(()=> Alert.alert('OK', 'Email válido'))
		.catch(() => Alert.alert('Erro', 'Email não cadastrado'))
  	}
    async function handleCadastro(dados){
		let data = {
			numero_matricula: dados.matricula,
			chefe: dados.chefe,
			cargo: dados.cargo,
			data_admissao: dados.dataAdmissao,
			data_nascimento: dados.dataNascimento,
			login: dados.login,
			senha: dados.senha,
			id_pessoa: id_pessoa,
			}

			api.post('/registrar/funcionario', JSON.stringify(data))
        	.then(() => Alert.alert('Sucesso', 'O usuário foi cadastrado com sucesso'))
        	.then(() => navigation.navigate('Login'))
        	.catch((err)=> Alert.alert('Usuário já existe', `Erro: ${err}`))  
  	}
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
						  <Image source={ban} style={styles.banner}  
						  resizeMethod='resize' 
						  resizeMode='contain'
						  />
        			</View>

        			<View style={styles.appContainer}>
        				<View style={styles.viewTitulo}>
							<Text style={styles.texto}>Cadastro</Text>
        				</View>
        				<TextInput placeholder='Matrícula' style={styles.input} 
        				placeholderTextColor='#FFF'
        				autoCorrect={false}
        				onChangeText={setMatricula}
        				value={matricula}
        				/>
						<TextInput placeholder='Chefe' 
          				placeholderTextColor='#FFF'
          				autoCapitalize='none'
          				style={styles.input} 
          				onChangeText={setChefe}
            			value={chefe}
            			/>
						<TextInput placeholder='Cargo' 
          				placeholderTextColor='#FFF'
          				autoCapitalize='none'
          				style={styles.input} 
          				onChangeText={setCargo}
            			value={cargo}
            			/>
						<View style={styles.viewDatePicker}>
							<Text style={styles.ViewPickerText}>Data de Admissão</Text>
							<DatePicker
          					style={styles.datePicker}
          					date={dataAdmissao}
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
          					onDateChange={(date) => {setDataAdmissao(date)}}
       						/>
						</View>
						<View style={styles.viewDatePicker}>
							<Text style={styles.ViewPickerText}>Data de Nascimento</Text>
							<DatePicker
          					style={styles.datePicker}
          					date={dataNascimento}
          					mode='date'
          					placeholder='Selecione'
          					format='YYYY/MM/DD'
          					minDate='1900/01/01'
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
          					onDateChange={(date) => {setDataNascimento(date)}}
       						/>
						</View>
						<TextInput placeholder='Email' style={styles.input} 
            			placeholderTextColor='#FFF'
            			autoCapitalize='none'
            			autoCorrect={false}
            			onChangeText={setEmail}
            			value={email}
            			/>
						<View style={styles.viewBotoes}>
            				<TouchableOpacity  style={styles.botoes}
            				onPress={() => verificaEmail(email)}>
        	  					<Text style={styles.textBotoes}>Verificar email</Text>
          					</TouchableOpacity>
          				</View>
        				<TextInput placeholder='Login' style={styles.input} 
            			placeholderTextColor='#FFF'
						autoCapitalize='none'
						autoCorrect={false}
						onChangeText={setLogin}
						value={login}
            			/>

						<TextInput placeholder='Senha' style={styles.input} 
						placeholderTextColor='#FFF'
						autoCapitalize='none'
						autoCorrect={false}
						secureTextEntry
						onChangeText={setSenha}
						value={senha}
						/>  
          				<View style={styles.viewBotoes}>
            				<TouchableOpacity  style={styles.botoes}
            				onPress={() => handleCadastro( { 
							matricula, login,senha, chefe, dataAdmissao, 
							dataNascimento, cargo, id_pessoa } )}>
        	  					<Text style={styles.textBotoes}>Registrar</Text>
         	 				</TouchableOpacity>
        					<TouchableOpacity  style={styles.botoes}
          					onPress={() => handleLogin()}>
          						<Text style={styles.textBotoes}>Login</Text>
        					</TouchableOpacity>
          				</View>
        			</View>
				</ScrollView>
    		</ImageBackground>
    	</KeyboardAvoidingView>
    );
};

