import {StyleSheet, Dimensions} from 'react-native';
const SCREEN_HEIGHT = (Dimensions.get('screen').height)/5
const SCREEN_WIDTH = (Dimensions.get('screen').width)

const styles = StyleSheet.create({
    container:{
      width: '100%', 
      height: '100%',
      alignItems: 'center'
    },
    viewPrincipal:{
      alignItems: 'center'
    },
    scrollView: {
      margin:0,
      width: '100%',
      height: '70%',
      borderWidth: 1,
      borderColor: '#49106D',
      borderRadius: 5,
    },
    viewBanner:{
      alignContent: 'center',
      height: SCREEN_HEIGHT,
      width: SCREEN_WIDTH,
      padding: 0,
    },
    banner:{
      width: '100%',
      height: '100%',
      padding:0,
    },
    appContainer: {
      marginTop: '2%',
      paddingHorizontal: '5%',
      paddingVertical: '10%',
      borderWidth: 1,
      borderColor: '#49106D',
      borderRadius: 5,
      height:'100%',
      width: '90%',
      backgroundColor: 'rgba( 93, 32, 134, 0.4 )',
      alignItems: 'center',
      marginBottom: '25%'
      
    },
    titulo:{
      backgroundColor: '#49106D',
      width: '100%',
      marginBottom: 10
    },
    texto:{
      alignContent: 'center',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: '5%',
      color: '#FFF',
      // borderBottomWidth: 1,
      // borderBottomColor: '#000',
    },
    input:{
      color: '#FFF',
      borderWidth: 1,
      borderColor: '#49106D',
      backgroundColor: 'rgba(20, 213, 72, 0.4 )',
      borderRadius: 5,
      height: '20%',
      width: '100%',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    inputLocal:{
      color: '#FFF',
      borderWidth: 1,
      borderColor: '#49106D',
      backgroundColor: 'rgba(20, 213, 72, 0.4 )',
      borderRadius: 5,
      height: '10%',
      width: '100%',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    viewPicker:{
      flexDirection: 'row', 
      alignItems: 'center', 
      backgroundColor: 'rgba(20, 213, 72, 0.4 )',
      borderWidth: 1,
      borderColor: '#49106D',
      width: '100%',
      height: '10%',
      marginBottom: 25,
      borderRadius: 5,
      paddingLeft: 0
    },
    picker:{
      height: 50, 
      width: 160,
      color: '#FFF', 
      fontWeight: 'bold'
    },
    ViewPickerText:{
      padding: 15,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFF',
    },
    viewBotoes:{
      flexDirection: 'row',
      height: '8%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    botoes:{
      width: '35%',
      height: '100%',
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
    }
  });
  
export default styles;