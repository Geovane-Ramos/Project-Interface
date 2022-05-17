import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

export default function SignUp(){
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <View style={styles.container}>

      <View style={styles.logo}>
        <View style={styles.logoIcon}>
        <FontAwesome
        name='list-alt'
        size={23}
        color='#7C7F8F'
        />
        </View>
        <Text style={styles.titulo}>Log Up</Text>
      </View>

      <View
        style={styles.inputAreaCadastro}
        >
        <TextInput
        style={[styles.inputNew, {marginRight: 30}]}
        placeholder='First Name'
        />
        <TextInput
        style={styles.inputNew}
        placeholder='Last Name'
        />
      </View>

      <View style={styles.inputArea}>
        <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={ (texto) => setEmail(texto) }
        />
      </View>

      <View style={[styles.inputArea, {marginTop: 10}]}>
        <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={ (texto) => setPassword(texto) }
        />
      </View>

      <View style={[styles.inputArea, {marginTop: 10}]}>
        <TextInput
        style={styles.input}
        placeholder='Confirmed Password'
        //value={password}
        //onChangeText={ (texto) => setPassword(texto) }
        />
      </View>

    <View style={styles.areaSenha}>
      <Feather
      name='square'
      size={20}
      color= '#FFF'
      />
      <Text style={styles.textSenha}>I Agree with privaci and policy</Text>
    </View>

    <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('SignUp')}
    >
      <Text style={styles.textButton}>Sign up</Text>
    </TouchableOpacity>
    </View>
  );
}