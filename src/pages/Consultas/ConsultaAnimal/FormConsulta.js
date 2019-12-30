import React from 'react';
import {
    View, 
    Text,
} from 'react-native';
import styles from './styles';


export default props =>{
        modificaData = (data)=>{
            const dia = data.substring(8,10)
            const mes = data.substring(5,7)
            const ano = data.substring(0,4);

            return(`${dia}/${mes}/${ano}`)
        }
        return(
            <View style={styles.viewTexto}>
                <View style={styles.viewLinha}>
                    <Text style={styles.textoFixo}>Marcação do Animal: </Text>     
                    <Text style={styles.texto}>{props.marcacao}</Text>
                </View>
                <View style={styles.viewLinha}>
                    <Text style={styles.textoFixo}>Sexo: </Text>     
                    <Text style={styles.texto}>{props.sexo_animal}</Text>
                </View>
                <View style={styles.viewLinha}>
                    <Text style={styles.textoFixo}>Idade Estimada: </Text>   
                    <Text style={styles.texto}>{props.idade_estimada}</Text>
                </View>
                <View style={styles.viewLinha}>
                    <Text style={styles.textoFixo}>Maturidade: </Text>
                    <Text style={styles.texto}>{props.ds_maturidade}</Text>
                </View>
                <View style={styles.viewLinha}>
                    <Text style={styles.textoFixo}>Atualizado em: </Text>
                    <Text style={styles.texto}>{this.modificaData(props.dt_ultima_atualizacao)}</Text>
                </View>
                
                
                
                
            </View>
            )     
    };
