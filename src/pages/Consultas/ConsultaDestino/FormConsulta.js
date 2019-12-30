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
                
                    <Text style={styles.textoFixo}>Descrição : </Text>     
                    <Text style={styles.texto}>{props.ds_destino}</Text>
                
                
                    <Text style={styles.textoFixo}>Tipo: </Text>     
                    <Text style={styles.texto}>{props.tp_destino}</Text>
                
                    <Text style={styles.textoFixo}>Data de Saída: </Text>     
                    <Text style={styles.texto}>{this.modificaData(props.dt_saida)}</Text> 

                    <Text style={styles.textoFixo}>Estado: </Text>     
                    <Text style={styles.texto}>{props.estado_animal}</Text> 

                    <Text style={styles.textoFixo}>ID do Animal: </Text>     
                    <Text style={styles.texto}>{props.id_animal}</Text> 
            </View>
            )     
    };
