import React from 'react';
import {
    View, 
    Text,
} from 'react-native';
import styles from './styles';


export default props =>{
        return(
            <View style={styles.viewTexto}>
                
                    <Text style={styles.textoFixo}>Histórico : </Text>     
                    <Text style={styles.texto}>{props.historico_completo}</Text>
                
                
                    <Text style={styles.textoFixo}>ID da Apreensão: </Text>     
                    <Text style={styles.texto}>{props.id_apreensao}</Text>
                
                    <Text style={styles.textoFixo}>Local da captura </Text>     
                    <Text style={styles.texto}>{props.local_captura}</Text> 
            </View>
            )     
    };
