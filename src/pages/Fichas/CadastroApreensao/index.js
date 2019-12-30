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
    Alert, ScrollView
} from 'react-native';


import styles from './styles';
import bgceptas from '../../../images/background1.png';
import ban from '../../../images/logo2.png';
import api from '../../../services/axios';


export default class CadastroApreensao extends Component {
    constructor(){
        super();
        this.state = {
            historicoCompleto: '',
            localCaptura: '',
            idEntidadeApreensao:'',
            idTipoApreensao:'',
            entidadesApreensao:[],
            tiposApreensao:[],
        }
    }
    componentDidMount(){
        api.get('/entidadesApreensao/todos')
        .then(result => result.data.entidadesApreensao)
        .then(data => this.setState({entidadesApreensao:data}))
        .then((res)=>{
            api.get('/tiposApreensao/todos')
            .then(result => result.data.tiposApreensao)
            .then(data => this.setState({tiposApreensao: data}))
        })
    }
    onSendApreensao = dados=>{
        api.post('/apreensoes/registrar',JSON.stringify({
           historicoCompleto: dados.historicoCompleto,
           localCaptura: dados.localCaptura,
           idEntidadeApreensao: dados.idEntidadeApreensao,
           idTipoApreensao: dados.idTipoApreensao,
        }))
        .then(()=>Alert.alert('Sucesso', 'Cadastrado com sucesso'))
        .then(()=>this.props.navigation.navigate('Cadastros'))
        .catch((err)=>Alert.alert(JSON.stringify(err)))
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
                                    <Text style={styles.texto}>Cadastro de Apreensão</Text>
                                </View>
                                <TextInput placeholder='Histórico completo' style={styles.input} 
                                    placeholderTextColor='#FFF'
                                    autoCorrect={false}
                                    multiline={true}
                                    numberOfLines={4}
                                    onChangeText={historico => this.setState({historicoCompleto:historico})} 
                                    value={this.state.historicoCompleto}
                                />
                                <TextInput placeholder='Local de Captura' style={styles.inputLocal} 
                                    placeholderTextColor='#FFF'
                                    autoCorrect={false}
                                    onChangeText={local => this.setState({localCaptura:local})} 
                                    value={this.state.localCaptura}
                                />
                                <View style={styles.viewPicker}>
                                    <Text style={styles.ViewPickerText}>Entidade Apreensão: </Text>
                                    <Picker
                                    selectedValue={this.state.idEntidadeApreensao}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) =>
                                    this.setState({idEntidadeApreensao:itemIndex})
                                }>
                                    <Picker.Item label="Selecione" value="" />
                                    {this.state.entidadesApreensao.map(entidade =>
                                        <Picker.Item label={entidade.nm_entidade_apreensao} 
                                        value={entidade.id_entidade_apreensao}  
                                        key={entidade.id_entidade_apreensao}/>)
                                    }
                                    </Picker>
                                </View>

                                <View style={styles.viewPicker}>
                                    <Text style={styles.ViewPickerText}>Tipos de Apreensão: </Text>
                                    <Picker
                                    selectedValue={this.state.idTipoApreensao}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) =>
                                    this.setState({idTipoApreensao:itemIndex})
                                }>
                                    <Picker.Item label="Selecione" value="" />
                                    {this.state.tiposApreensao.map(tipos =>
                                        <Picker.Item label={tipos.tipo_apreensao} 
                                        value={tipos.id_tipo_apreensao}  
                                        key={tipos.id_tipo_apreensao}/>)
                                    }
                                    </Picker>
                                </View>

                                
                        
                                    <View style={styles.viewBotoes}>
                                        <TouchableOpacity style={styles.botoes} 
                                        onPress={() => this.props.navigation.navigate('Cadastros')}>
                                        <Text style={styles.textBotoes}>Cancelar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.botoes}
                                        onPress={() => this.onSendApreensao(this.state)}>
                                        <Text style={styles.textBotoes}>Cadastrar</Text>
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
