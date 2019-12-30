import {StyleSheet, Dimensions} from 'react-native';
const SCREEN_HEIGHT = (Dimensions.get('screen').height)/5
const SCREEN_WIDTH = (Dimensions.get('screen').width)

const styles = StyleSheet.create({
    container:{
        height: '100%',
    },
    viewBanner:{
        alignContent: 'center',
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
      },
      banner:{
        width: '100%',
        height: '100%',
        padding:0,
      },
      appContainer:{
        padding: 10,
        borderColor: '#49106D',
        borderRadius: 5,
        alignContent: 'center',
        backgroundColor: 'rgba(93, 32, 134, 0.7 )',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        marginBottom: '15%'
      },
      titulo:{
        backgroundColor: '#49106D',
        width: '100%',
        marginVertical: 10,
        alignItems: 'center',
        paddingBottom: 20,
        marginBottom: '10%'
      },
      texto:{
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: '5%',
        color: '#FFF',
      },
      input:{
        marginBottom: 20,
        color: '#FFF',
        borderWidth: 1,
        borderColor: '#49106D',
        backgroundColor: 'rgba(20, 213, 72, 0.4 )',
        borderRadius: 5,
        height: '13%',
        width: '90%',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 15,
      },
      textoFixo:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgba(20, 213, 72, 1 )',
        marginTop: '4%',
    },
    viewTexto:{
        padding: 10,
        marginVertical: 30,
        backgroundColor: 'rgba(20, 213, 72, 0.4 )',
        alignItems: 'center',
        width: '100%',
        borderRadius: 5,
    },
    texto:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: '2%',
      },
      viewBotoes:{
        flexDirection: 'row',
        height: '13%',
      },
      botoes:{
        width: '40%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#49106D',
        },
        textBotoes:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        }
})
export default styles;