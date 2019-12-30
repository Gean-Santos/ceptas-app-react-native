import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
const SCREEN_HEIGHT = (Dimensions.get('screen').height)/3
const SCREEN_WIDTH = (Dimensions.get('screen').width)
const styles = StyleSheet.create({
    container:{
        width: '100%', 
        height: '100%',
        
      },
      scrollView: {
        margin:0,
        flex: 1,
        padding: 0,
        width: '100%',
        height: '100%',
      },
      viewConteudo:{
        alignItems: 'center',
        height: '50%'
      },
      viewBanner:{
        justifyContent: 'center',
        alignItems: 'center',
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        marginBottom: '2%',
      },
    
      banner:{
        width: '90%',
        height: '100%',
      },
        
      appContainer: {
        paddingTop: '7%',
        marginTop: '5%',
        padding: '2%',
        borderWidth: 1,
        borderColor: '#49106D',
        borderRadius: 5,
        alignContent: 'center',
        backgroundColor: 'rgba(93, 32, 134, 0.7 )',
        alignItems: 'center',
        height: '100%',
        width: '90%',
        marginBottom: '20%'
      },
    
      input:{
        marginVertical: 15,
        borderWidth: 1,
        borderColor: '#49106D',
        backgroundColor: 'rgba(20, 213, 72, 0.4 )',
        borderRadius: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        height: '20%',
        width: '90%',
      },
    
      botoes:{
        height: '90%',
        width: '40%',
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
    
      viewBotoes:{
        flexDirection: 'row',
        height: '20%',
      },
  
})
export default styles;