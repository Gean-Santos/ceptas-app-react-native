import {StyleSheet, Dimensions} from 'react-native';
const SCREEN_HEIGHT = (Dimensions.get('screen').height)/5
const SCREEN_WIDTH = (Dimensions.get('screen').width)
const styles = StyleSheet.create({
	container:{
    	width: '100%', 
    	height: '100%',  
    },
    scrollView: {
    	margin:0,
    	padding: 0,
    	width: '100%',
    	height: '100%',
    },
    viewBanner:{
     	alignItems: 'center',
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
      	marginHorizontal: '2%',
      	marginBottom: '70%',
      	paddingHorizontal: '5%',
      	paddingVertical: '3%',
		borderWidth: 1,
		borderColor: '#49106D',
		borderRadius: 5,
		alignContent: 'center',
		backgroundColor: 'rgba(93, 32, 134, 0.7 )',
		alignItems: 'center',
		height: '80%',
    },
    viewTitulo:{
		backgroundColor: '#49106D',
		justifyContent:'center',
		alignItems: 'center',
		width: '100%',
		paddingVertical: '5%',
		marginBottom: '5%'
    },
    texto:{
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFF',
    },
    input:{
		marginBottom: 20,
		color: '#FFF',
		borderWidth: 1,
		borderColor: '#49106D',
		backgroundColor: 'rgba(20, 213, 72, 0.4 )',
		borderRadius: 5,
		height: '20%',
		width: '100%',
		fontSize: 16,
		fontWeight: 'bold',
    },
    viewDatePicker:{
		flexDirection: 'row', 
		justifyContent: 'flex-start',
		// alignItems: 'flex-start', 
		backgroundColor: 'rgba(20, 213, 72, 0.4 )',
		borderWidth: 1,
		borderColor: '#49106D',
		width: '100%',
		height: '20%',
		marginBottom: 25,
		borderRadius: 5,
		padding: 0
    },
    ViewPickerText:{
		padding: 15,
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFF',
    },
    datePicker:{
		width: '90%',
		marginLeft: '-32%',
		marginTop: '2%',
  },
    viewBotoes:{
		flexDirection: 'row',
		height: '20%',
		paddingBottom: '5%'
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
	},
  });
  
export default styles;