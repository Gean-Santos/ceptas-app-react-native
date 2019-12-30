import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        width: '100%', 
        height: '100%',
        alignItems: 'center',
      },
    scroll:{
          width: '100%',
          height: '100%'
    },
    viewLinha:{
        flexDirection:'row',
    },
    inputMarcacao:{
        marginVertical: 20,
        color: '#FFF',
        borderWidth: 1,
        borderColor: '#49106D',
        backgroundColor: 'rgba(20, 213, 72, 0.4 )',
        borderRadius: 5,
        height: 50,
        width: '90%',
        fontSize: 16,
        fontWeight: 'bold',
    },
    viewTitulo:{
		backgroundColor: '#49106D',
		justifyContent:'center',
		alignItems: 'center',
		width: '100%',
		paddingVertical: '3%',
    },
    textoTitulo:{
        fontSize:16,
        fontWeight:'bold',
        color:'#FFF'
    },
    botao:{
        width: '35%',
		height: '100%',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		marginHorizontal: 10,
		borderRadius: 5,
		backgroundColor: '#49106D',
    },
    textoBotao:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
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
    textoFixo:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'rgba(20, 213, 72, 1 )',
        marginTop: '2%',
    },
    viewTexto:{
        padding: 10,
        marginVertical: 30,
        backgroundColor: 'rgba( 93, 32, 134, 0.7 )',
        alignItems: 'center',
        width: '100%',
        borderRadius: 5,
    },
    texto:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: '2%',
      },
    viewBotoes:{
        flexDirection: 'row',
        height: '8%',
    },
    flat:{
        alignItems: 'center',
        justifyContent:'center',
        width: '100%',
        height: '100%' ,
        backgroundColor: 'rgba(20, 213, 72, 0.3 )',
    },
    center:{
        alignItems:'center',
        width:'100%'
    }

})
export default styles;