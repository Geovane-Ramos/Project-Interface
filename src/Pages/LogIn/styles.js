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
      backgroundColor: '#FFF',
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
      color: '#7C7F8F',
      padding: 8,
      fontSize: 18,
      paddingLeft: 15,
    },
    icon: {
      width: '15%',
      height: 50,
    },
    titulo: {
      fontFamily: 'Roboto_700Bold',
      fontSize: 25,
      color: '#FFF',
      //fontWeight: '400',
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
      fontSize: 15,
      fontFamily: 'Roboto_700Bold',
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
    textRecuperarSenha: {
      marginLeft: 80,
      color: '#FF0000',
      fontWeight: '600'
    },
    areaImage: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 15,
    },
    rodape: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
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
  });

export default styles;