import React from 'react';
import { useTema } from '../context/TemaContext';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, Button } from 'react-native';

const Mapa = ({ navigation }) => {
  const { temaEscuro } = useTema(); 
  const estilos = temaEscuro ? estilosEscuros : estilosClaros; 

  const restaurantes = [
    { id: 1, nome: 'Arte do sabor', endereco: 'Rua Só Nós Dois, 123', itemCardapio: 'Pizza', imagem: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/d2/e7/20/o-arte-sabor.jpg' },
    { id: 2, nome: 'Doces Dengo', endereco: 'Av.Pato Donald, 456', itemCardapio: 'Quindim', imagem: 'https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2020/11/fabrica-dengo-sao-paulo.jpg' },
    { id: 3, nome: 'Comida da Terra', endereco: 'Rua do Grito, 789', itemCardapio: 'Salada Caesar', imagem: 'https://campinas.com.br/wp-content/uploads/2022/07/mae-terra.jpg' },
    { id: 4, nome: 'Doce Refresco', endereco: 'Travessa do Tranco, 321', itemCardapio: 'Sorvete', imagem: 'https://content.presspage.com/uploads/685/58a7745d-0708-43c6-85a4-f360a92553de/1920_foodforthought1-5.jpg?95911' },
  ];

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.title}>Restaurantes - InfnetFood</Text>

      <Image
        source={{
          uri: 'https://viagememdetalhes.com.br/wp-content/uploads/2017/02/Mapa-Centro-do-Rio-com-Belga-Hotel.jpg',
        }}
        style={estilos.map}
      />

      <FlatList
        data={restaurantes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.restaurantName}>{item.nome}</Text>
            <Image
              source={{ uri: item.imagem }} 
              style={estilos.restaurantImage}
            />
            <Button
              title="Ver Detalhes"
              color="#ff914d"
              onPress={() => navigation.navigate('DetalhesRestaurante', { restaurante: item })}
            />
          </View>
        )}
      />
    </ScrollView>
  );
};

const estilosClaros = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: '#fef5e7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff914d',
    textAlign: 'center',
    marginBottom: 10,
  },
  map: {
    width: '90%',
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ff914d',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 10,
    width: '90%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  restaurantImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
});

const estilosEscuros = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#81b0ff',
    textAlign: 'center',
    marginBottom: 10,
  },
  map: {
    width: '90%',
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#81b0ff',
  },
  card: {
    backgroundColor: '#2c2c2c',
    padding: 16,
    marginBottom: 10,
    width: '90%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  restaurantImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default Mapa;

