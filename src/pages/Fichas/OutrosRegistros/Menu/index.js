import React from 'react';
import {
    StatusBar,
    View, 
    Image,
    Text, 
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

import styles from './styles'

import bgceptas from '../../../../images/background1.png';
import ban from '../../../../images/logo2.png';

export default function OutrosDados({navigation}){
    
    return(
        <ImageBackground source={bgceptas} style={styles.container}
        resizeMode='cover'>
        <StatusBar backgroundColor='rgba(93, 32, 134, 0.9 )' />  
        <View style={styles.viewBanner}>
            <Image source={ban} style={styles.banner} />
        </View>
        
            <View style = {styles.principalView}>
                <TouchableOpacity style={styles.botoes} 
                onPress={()=> navigation.navigate('CadastrarEspecie')}>
                    <Text style={styles.textoBotoes}>Cadastrar Espécie</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.botoes}
                onPress={() => navigation.navigate('CadastrarTipoApreensao')}>
                    <Text style={styles.textoBotoes}>Cadastrar Tipo de Apreensão</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botoes}
                onPress={()=> navigation.navigate('CadastrarEntidadeApreensao')}>
                    <Text style={styles.textoBotoes}>Cadastrar Entidade de Apreensão</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botoes}
                onPress={() => navigation.navigate('CadastrarRecinto')}>
                    <Text style={styles.textoBotoes}>Cadastrar Recinto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botoes} 
                onPress={() => navigation.navigate('Inicio')}>
                    <Text style={styles.textoBotoes}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};