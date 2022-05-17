import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  Image
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

export default function LogIn(){
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <View style={styles.container}>

      <View style={styles.logo}>
        <View style={styles.logoIcon}>
        <FontAwesome
        name='diamond'
        size={23}
        color='#7C7F8F'
        />
        </View>
        <Text style={styles.titulo}>Log In</Text>
      </View>

      <View style={styles.inputArea}>
        <TextInput
        style={styles.input}
        placeholder='Username'
        value={email}
        onChangeText={ (texto) => setEmail(texto) }
        />

        <TouchableNativeFeedback style={styles.icon}>
        <FontAwesome
        name='user'
        size={25}
        color= '#7C7F8F'
        />
        </TouchableNativeFeedback>
      </View>

      <View style={[styles.inputArea, {marginTop: 10}]}>
        <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={ (texto) => setPassword(texto) }
        />

        <TouchableNativeFeedback style={styles.icon}>
        <FontAwesome
        name='lock'
        size={25}
        color= '#7C7F8F'
        />
        </TouchableNativeFeedback>
      </View>

    <View style={styles.areaSenha}>
      <Feather
      name='square'
      size={20}
      color= '#FFF'
      />
      <Text style={styles.textSenha}>Remember me</Text>
      <Text style={styles.textRecuperarSenha}>Forgot Password</Text>
    </View>

    <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('SignUp')}
    >
      <Text style={styles.textButton}>Log In</Text>
    </TouchableOpacity>

    <Text style={{color: '#FFF', marginTop: 80}}>Or Sign in with</Text>

    <View style={styles.areaImage}>
      <Image
      style={{marginRight:5}}
      source={require('../../Assets/Facebook.png')}
      />
      <Image
      style={{marginRight:5}}
      source={require('../../Assets/Twitter.png')}
      />
      <Image
      style={{marginRight:5}}
      source={require('../../Assets/Google.png')}
      />
      <Image
      style={{marginRight:5}}
      source={require('../../Assets/Instagram.png')}
      />
    </View>

    <View style={styles.rodape}>
      <Text style={{color: '#FFF'}}>Don´t have an account</Text>
      <Text style={{color: '#FF0000', fontWeight: '600', marginLeft: 20}}>Sign up</Text>
    </View>
    </View>
  );
}