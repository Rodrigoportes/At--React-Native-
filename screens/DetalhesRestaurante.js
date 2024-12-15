import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useTema } from '../context/TemaContext';

const DetalhesRestaurante = ({ route, navigation }) => {
  const { restaurante } = route.params;
  const { temaEscuro } = useTema(); 

  const estilos = temaEscuro ? estilosEscuros : estilosClaros; 

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Detalhes do Restaurante</Text>
      <View style={estilos.detailsCard}>
        <Text style={estilos.restaurantName}>{restaurante.nome}</Text>
        <Text style={estilos.restaurantAddress}>Endereço: {restaurante.endereco}</Text>
        <Text style={estilos.restaurantMenu}>Prato do dia: {restaurante.itemCardapio}</Text>
      </View>
      <View style={estilos.buttonContainer}>
        <Button title="Voltar" onPress={() => navigation.goBack()} color="#ff914d" />
      </View>
    </View>
  );
};

const estilosClaros = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fef5e7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ff914d',
    textAlign: 'center',
  },
  detailsCard: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 20,
    borderColor: '#ff914d',
    borderWidth: 1,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  restaurantAddress: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  restaurantMenu: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
});

const estilosEscuros = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ff914d',
    textAlign: 'center',
  },
  detailsCard: {
    width: '100%',
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginBottom: 20,
    borderColor: '#ff914d',
    borderWidth: 1,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ccc',
    marginBottom: 10,
  },
  restaurantAddress: {
    fontSize: 16,
    color: '#bbb',
    marginBottom: 10,
  },
  restaurantMenu: {
    fontSize: 16,
    color: '#fff',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default DetalhesRestaurante;
