import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTema } from '../context/TemaContext';

const categories = [
  { id: '1', name: 'Salgados', image: require('../assets/salgados.jpg') },
  { id: '2', name: 'Bebidas', image: require('../assets/bebidas.jpg') },
  { id: '3', name: 'Sobremesas', image: require('../assets/sobremesa.jpg') },
  { id: '4', name: 'Saladas', image: require('../assets/salada.jpg') },
  { id: '5', name: 'Promoção', image: require('../assets/promocao.jpg') },
];

const Home = ({ navigation }) => {
  const { temaEscuro } = useTema();

  const estilos = temaEscuro ? estilosEscuros : estilosClaros;

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={estilos.card}
      onPress={() => navigation.navigate('Products', { category: item })}
    >
      <Image source={item.image} style={estilos.cardImage} />
      <Text style={estilos.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Categorias de Refeições</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        contentContainerStyle={estilos.list}
      />
    </View>
  );
};

const estilosClaros = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff5e6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ff914d',
    padding: 15,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    flexShrink: 1,
  },
});

const estilosEscuros = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#444',
    padding: 15,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ccc',
    flexShrink: 1,
  },
});

export default Home;

