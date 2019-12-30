import React, {useState} from 'react';
import {
  Text,
  StatusBar,
  ImageBackground,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import styles from './styles';
import api from '../../../services/axios';
import axios from 'axios'
import background from '../../../images/background1.png';
import ban from '../../../images/logo1.png';

export default function Login ({navigation}){
	const initialState = '';
	const [usuario, setUsuario] = useState(initialState);
	const [senha, setSenha] = useState(initialState);

//   async function verificaNull(texto){
//      if(!texto){
//     	Alert.alert('Erro', `Preencha o campo ${texto}`)
//     }
//   }

  async  function handleCadastro(){
      navigation.navigate('CadastrarPessoa');
  }

      async function handleLogin(dados){ 
		const res = await api.post('/login',JSON.stringify(dados))
		.then(() => navigation.navigate('Inicio'))
		.catch(()=>Alert.alert('Erro', 'Verifique seu login ou senha')); 	
  }

  return (
	  <KeyboardAvoidingView
		behavior='position'
		enabled={Platform.OS === 'ios'}
		style={{height: '100%'}}>
		<StatusBar backgroundColor='rgba(93, 32, 134, 0.9 )' />  
		  <ImageBackground
			source={background}
			style={styles.container}
			resizeMode='cover'>
			  <ScrollView style={styles.scrollView}>
				  <View style={styles.viewConteudo}>
					<View style={styles.viewBanner}>
						<Image source={ban}
								style={styles.banner}
								resizeMethod='resize'
								resizeMode='contain'
						/>
					</View>
					<View style={styles.appContainer}>
						<TextInput
							placeholder='Login'
							style={styles.input}
							placeholderTextColor='#FFF'
							autoCapitalize='none'
							autoCorrect={false}
							onChangeText={setUsuario} value={usuario}
						/>
						<TextInput
							placeholder='Senha'
							style={styles.input}
							placeholderTextColor='#FFF'
							autoCapitalize='none'
							autoCorrect={false}
							value={senha}
							onChangeText={setSenha}
							secureTextEntry
						/>
						<View style={styles.viewBotoes}>
							<TouchableOpacity style={styles.botoes} 
								onPress={() =>handleLogin({usuario, senha})}>
								<Text style={styles.textBotoes} >Entrar</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.botoes} onPress={handleCadastro}>
								<Text style={styles.textBotoes} >Registrar</Text>
							</TouchableOpacity>
						</View>
					</View>
				  </View>
			  </ScrollView>
		  </ImageBackground>
	  </KeyboardAvoidingView>
  );
};


