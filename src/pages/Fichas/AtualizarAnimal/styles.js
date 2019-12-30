import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_HEIGHT = (Dimensions.get('screen').height)/5
const SCREEN_WIDTH = (Dimensions.get('screen').width)

const styles = StyleSheet.create({
    container:{
      width: '100%', 
      height: '100%',
      alignItems:'center',
    },
    principal: {
      margin:0,
      padding: 0,
      width: '100%',
      height: '100%',
      alignItems:'center',
    },
    viewBanner:{
      alignContent: 'center',
      justifyContent: 'center',
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
      borderWidth: 1,
      padding: 10,
      borderColor: '#49106D',
      borderRadius: 5,
      alignContent: 'center',
      backgroundColor: 'rgba(93, 32, 134, 0.7 )',
      alignItems: 'center',
      height: '100%',
      marginBottom: '30%',
      width:'90%'
    },
    titulo:{
      backgroundColor: '#49106D',
      width: '100%',
      marginBottom: 10,
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
      height: '8%',
      width: '100%',
      fontSize: 16,
      fontWeight: 'bold',
      paddingLeft: 15,
    },
    viewBotoes:{
      flexDirection: 'row',
      height: '27%',
    },
    viewPicker:{
      flexDirection: 'row', 
      alignItems: 'center', 
      backgroundColor: 'rgba(20, 213, 72, 0.4 )',
      borderWidth: 1,
      borderColor: '#49106D',
      width: '100%',
      height: '8%',
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
    datePicker : {
      width: '90%',
      marginLeft: '-32%',
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
    
  });
  
export default styles;