import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
    },
    viewBanner:{
        alignContent: 'center',
        height: 120,
        width: '100%',
        marginTop: '5%',
    },
    banner:{
        width: '100%',
        height: '100%',
        margin: -3,
        padding:0,
    },
    principalView: {
        marginTop: '20%',
        width: '100%',
        height: '50%',
        alignItems: 'center',
        alignContent: 'center',
    },
    botoes:{
        height: '10%',
        width: '80%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 20,
        paddingVertical: 25,
        borderRadius: 5,
        backgroundColor: '#49106D',
    },
    textoBotoes:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
});
export default styles;