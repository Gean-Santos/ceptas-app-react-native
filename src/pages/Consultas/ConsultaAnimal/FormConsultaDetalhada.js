import React, {Component} from 'react';
import {
    View, 
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    StyleSheet, 
    StatusBar
} from 'react-native';

import back from '../../../images/background1.png';
import ban from '../../../images/logo2.png';

export default class  ConsultaDetalhada extends Component{
    modificaData = (data)=>{
        const dia = data.substring(8,10)
        const mes = data.substring(5,7)
        const ano = data.substring(0,4);

        return(`${dia}/${mes}/${ano}`)
        }
    render(){
        const {animais} =this.props.navigation.state.params; 

        return(
            <ImageBackground source={back} style={styles.container}>
                <StatusBar backgroundColor='rgba(93, 32, 134, 0.9 )' />  
                <View style={styles.viewBanner}>
                    <Image source={ban} style={styles.banner} />
                </View>
                <View style={styles.viewTitulo}>
				    <Text style={styles.texto}>Ficha do Animal</Text>
        	    </View>
                <View style={styles.viewTexto}>
                    <Text style={styles.textoFixo}>Marcação do Animal: </Text>     
                    <Text style={styles.texto}>{animais.animal.marcacao}</Text>
                    <Text style={styles.textoFixo}>Sexo: </Text>     
                    <Text style={styles.texto}>{animais.animal.sexo_animal}</Text>
                    <Text style={styles.textoFixo}>Idade Estimada: </Text>   
                    <Text style={styles.texto}>{animais.animal.idade_estimada}</Text>
                    <Text style={styles.textoFixo}>Maturidade: </Text>
                    <Text style={styles.texto}>{animais.animal.ds_maturidade}</Text>
                    <Text style={styles.textoFixo}>Espécie: </Text>
                    <Text style={styles.texto}>{animais.especie.ds_especie}</Text>
                    <Text style={styles.textoFixo}>Nome Popular: </Text>
                    <Text style={styles.texto}>{animais.especie.nm_popular}</Text>
                    <Text style={styles.textoFixo}>Atualizado em: </Text>
                    <Text style={styles.texto}>{this.modificaData(animais.animal.dt_ultima_atualizacao)}</Text>
                </View>
                <View style={styles.viewBotoes}>
                    <TouchableOpacity style={styles.botoes} 
                    onPress={()=> this.props.navigation.navigate('ConsultaAnimal')}>
                        <Text style={styles.textBotoes}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.botoes}
                    onPress={() => this.props.navigation.navigate('AtualizarAnimal',
                    {animal:animais.animal})}>
                        <Text style={styles.textBotoes}>Atualizar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            ) 
        }        
    }

    const styles = StyleSheet.create({
        container:{
            width: '100%', 
            height: '100%',
            alignItems: 'center',
            
        },
        viewBanner:{
            alignContent: 'center',
            height: '16%',
            width: '100%',
            marginTop: '5%',
            padding: 0,
        },
        banner:{
            width: '100%',
            height: '100%',
            padding:0,
        },
        viewTitulo:{
            backgroundColor: '#49106D',
            justifyContent:'center',
            alignItems: 'center',
            width: '80%',
        },
          textoFixo:{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'rgba(20, 213, 72, 1 )',
            marginTop: '4%',
        },
        viewTexto:{
            padding: 10,
            marginVertical: 10,
            backgroundColor: 'rgba( 93, 32, 134, 0.6 )',
            alignItems: 'center',
            width: '80%',
            borderRadius: 5,
        },
        texto:{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#FFF',
            marginTop: '2%',
        },
        botoes:{
            width: '35%',
            height: '30%',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
            marginVertical: 10,
            borderRadius: 5,
            backgroundColor: '#49106D',
          },
          textBotoes:{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#FFF',
          },
          viewBotoes:{
            flexDirection: 'row',
            height: '25%',
          },
    })
