import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTema } from '../context/TemaContext'; 

const Perfil = () => {
  const { temaEscuro } = useTema(); 
  const estilos = temaEscuro ? estilosEscuros : estilosClaros; 

  const usuario = {
    nome: 'Rodrigo Silva',
    email: 'rodrigo@email.com',
    avatar: 'https://i.pinimg.com/236x/37/01/e7/3701e763f6ded4234b68d8fac1a9fa85.jpg',
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Perfil</Text>
      <Image source={{ uri: usuario.avatar }} style={estilos.avatar} />
      <Text style={estilos.label}>Nome:</Text>
      <Text style={estilos.value}>{usuario.nome}</Text>
      <Text style={estilos.label}>E-mail:</Text>
      <Text style={estilos.value}>{usuario.email}</Text>
    </View>
  );
};

const estilosClaros = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5e6',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#ff914d',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  value: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
});

const estilosEscuros = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#444',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ccc',
    marginTop: 10,
  },
  value: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Perfil;
