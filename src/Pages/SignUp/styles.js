import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#24253C',
    },
    inputArea: {
      flexDirection: 'row',
      backgroundColor: '#F3F3F3',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#E33654',
      borderRadius: 25,
      width: '90%',
      height: 50,
    },
    input: {
      width: '85%',
      height: 50,
      color: '#808080',
      padding: 8,
      fontSize: 18,
      paddingLeft: 15,
    },
    icon: {
      width: '15%',
      height: 50,
    },
    titulo: {
      fontSize: 25,
      color: '#FFF',
      fontFamily: 'Roboto_700Bold',
    },
    button: {
      marginTop: 25,
      borderRadius: 25,
      backgroundColor: '#E33654',
      width: '90%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textButton: {
      color: '#FFF',
      fontFamily: 'Roboto_700Bold',
      fontSize: 15,
    },
    areaSenha: {
      flexDirection: 'row',
      marginTop: 20,
      alignItems: 'center',
    },
    textSenha: {
      color: '#FFF',
      marginLeft: 5
    },
    logo: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    logoIcon: {
      marginRight: 5
    },
    inputAreaCadastro: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center'
    },
    inputNew: {
      width: '40%',
      height: 50,
      backgroundColor: '#F3F3F3',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#E33654',
      borderRadius: 25,
      color: '#808080',
      padding: 8,
      fontSize: 18,
      marginBottom: 15,
      paddingLeft: 15,
    }
});

export default styles;