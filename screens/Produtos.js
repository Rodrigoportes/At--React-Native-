import React, { useState } from 'react';
import {Text, SafeAreaView, StyleSheet, FlatList, View, TouchableOpacity, Image,} from 'react-native';
import { useTema } from '../context/TemaContext'; 

export default function Produtos({ route, navigation, carrinho, setCarrinho }) {
  const { category } = route.params;

  const { temaEscuro } = useTema(); 
  const estilos = temaEscuro ? estilosEscuros : estilosClaros; 

  const produtos = [
    { id: '1', nome: 'Coxinha', preco: 5.0, categoria: 'Salgados', imagem: 'https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2023/02/coxinha-g772e5ca7a_1920.jpg' },
    { id: '2', nome: 'Kibe', preco: 4.0, categoria: 'Salgados', imagem: 'https://www.estadao.com.br/resizer/v2/VKOTYNAZPFC3NPO436KDK5KMYE.jpeg?quality=80&auth=d28d2825ae9a95a00c9a33efee2b058fcc6ed2aa583e75b046f8ff22239ddbef&width=720&height=503&focal=495,653' },
    { id: '3', nome: 'Refrigerante', preco: 6.0, categoria: 'Bebidas', imagem: 'https://s2.glbimg.com/GUda5oj9xkd_yQNyn36mDn9XJmo=/620x455/e.glbimg.com/og/ed/f/original/2018/08/17/beber-refrigerante-todos-os-dias-esta-te-matando.jpg' },
    { id: '4', nome: 'Suco', preco: 5.5, categoria: 'Bebidas', imagem: 'https://www.citrosuco.com.br/wp-content/uploads/2022/02/THUMB-05.png' },
    { id: '5', nome: 'Pudim', preco: 8.0, categoria: 'Sobremesas', imagem: 'https://static.itdg.com.br/images/640-440/d1307a2e17cda187df76b78cfd3ac464/shutterstock-2322251819-1-.jpg' },
    { id: '6', nome: 'Salada Caesar', preco: 10.0, categoria: 'Saladas', imagem: 'https://static.itdg.com.br/images/1200-675/3f0787cb6db2f0db10269fc45bd8abee/shutterstock-1078415420.jpg' },
    { id: '7', nome: 'Combo Coxinha + Refri', preco: 10.0, categoria: 'Promoção', imagem: 'https://img.freepik.com/fotos-premium/salgadinhos-brasileiros-de-frango-frito-e-suco-de-laranja_70216-3480.jpg' },
  ];

  const produtosFiltrados = produtos.filter(
    (produto) => produto.categoria === category.name
  );

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => {
      const itemExistente = prevCarrinho.find((item) => item.id === produto.id);
      if (itemExistente) {
        return prevCarrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prevCarrinho, { ...produto, quantidade: 1 }];
      }
    });
  };

  const getQuantidade = (produtoId) => {
    const item = carrinho.find((item) => item.id === produtoId);
    return item ? item.quantidade : 0;
  };

  const renderProduto = ({ item }) => {
    const quantidade = getQuantidade(item.id);
    const isAdded = quantidade > 0;

    return (
      <View style={[estilos.card, isAdded && estilos.cardAdded]}>
        <Image source={{ uri: item.imagem }} style={estilos.imagem} />
        <Text style={estilos.cardText}>{item.nome}</Text>
        <Text style={estilos.cardText}>Preço: R$ {item.preco.toFixed(2)}</Text>
        <TouchableOpacity
          style={estilos.button}
          onPress={() => adicionarAoCarrinho(item)}
        >
          <Text style={estilos.buttonText}>
            {isAdded ? `Adicionar (${quantidade})` : 'Adicionar ao Carrinho'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.title}>Produtos - {category.name}</Text>

      {produtosFiltrados.length > 0 ? (
        <FlatList
          data={produtosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={renderProduto}
          contentContainerStyle={estilos.listContainer}
        />
      ) : (
        <Text style={estilos.noProducts}>
          Nenhum produto encontrado nessa categoria.
        </Text>
      )}
    </SafeAreaView>
  );
}

const estilosClaros = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ff914d',
  },
  listContainer: {
    paddingBottom: 16,
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
    alignItems: 'center',
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardAdded: {
    backgroundColor: '#27ae60',
  },
  cardText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#27ae60',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noProducts: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
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
  listContainer: {
    paddingBottom: 16,
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
    alignItems: 'center',
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardAdded: {
    backgroundColor: '#27ae60',
  },
  cardText: {
    fontSize: 18,
    color: '#ccc',
    fontWeight: '500',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#27ae60',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noProducts: {
    fontSize: 18,
    color: '#bbb',
    textAlign: 'center',
    marginTop: 20,
  },
});





