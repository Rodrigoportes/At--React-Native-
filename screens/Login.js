import React, { useState } from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Login({ navigation, setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const usuarioMockado = { email: 'rodrigo@email.com', senha: '123' };

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (email === usuarioMockado.email && senha === usuarioMockado.senha) {
      Alert.alert(`Bem-vindo, ${email}!`);
      setIsAuthenticated(true);
      navigation.replace('Home');
    } else {
      Alert.alert('Erro', 'E-mail ou senha inválidos!');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/LoginImage.png')} />
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite sua Senha"
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff5e6',
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 100,
    marginBottom: 40,
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: '100%',
    backgroundColor: '#FFF',
    fontSize: 16,
    borderRadius: 3,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  botao: {
    width: '100%',
    height: 42,
    backgroundColor: '#ff914d',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 3,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

