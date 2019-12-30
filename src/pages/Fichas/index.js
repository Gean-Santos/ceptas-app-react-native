import React,{useState} from 'react';
import {
    StatusBar,
    View, 
    Image,
    Text, 
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

import background from '../../images/background1.png';
import ban from '../../images/logo2.png';
import styles from './styles';

export default function Inicio({navigation}){
    return(
        <ImageBackground source={background} style={styles.container}
        resizeMode='cover'>
        <StatusBar backgroundColor='rgba(93, 32, 134, 0.9 )' />
        <View style={styles.viewBanner}>
            <Image source={ban} style={styles.banner} />
        </View>

            <View style = {styles.principalView}>
                <TouchableOpacity style={styles.botoes}
                    onPress={() => navigation.navigate('CadastrarAnimal')}>
                    <Text style={styles.textoBotoes}>Cadastrar Animal</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.botoes}
                    onPress={() => navigation.navigate('CadastrarApreensao')}>
                    <Text style={styles.textoBotoes}>Cadastrar Apreensao</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botoes}
                    onPress={() => navigation.navigate('CadastrarDestino')}>
                    <Text style={styles.textoBotoes}>Cadastrar Destino</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.botoes} 
                onPress={() => navigation.navigate('CadastrarEvento')}>
                    <Text style={styles.textoBotoes}>Cadastrar Evento</Text>
                </TouchableOpacity> */}

                {/* <TouchableOpacity style={styles.botoes}
                    onPress={() => navigation.navigate('CadastrarEventoAnimal')}>
                    <Text style={styles.textoBotoes}>Cadastrar Evento Animal</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.botoes}
                    onPress={() => navigation.navigate('Inicio')}>
                    <Text style={styles.textoBotoes}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
