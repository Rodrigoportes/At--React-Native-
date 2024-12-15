import React from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
import { useTema } from '../context/TemaContext';

export default function Carrinho({ navigation, carrinho }) {
  const { temaEscuro } = useTema();

  const estilos = temaEscuro ? estilosEscuros : estilosClaros;

  const calcularTotal = () => {
    return carrinho
      .reduce((total, item) => total + item.preco * item.quantidade, 0)
      .toFixed(2);
  };
  
  const handleConfirmarPedido = () => {
    navigation.navigate('Checkout'); 
  };

  const renderItem = ({ item }) => (
    <View style={estilos.item}>
      <Text style={estilos.itemText}>{item.nome}</Text>
      <Text style={estilos.itemText}>Quantidade: {item.quantidade}</Text>
      <Text style={estilos.itemText}>Preço: R$ {(item.preco * item.quantidade).toFixed(2)}</Text>
    </View>
  );

  return (
    <SafeAreaView style={estilos.container}>
     
      

      <Text style={estilos.title}>Carrinho</Text>

      {carrinho.length > 0 ? (
        <>
          <FlatList
            data={carrinho}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={estilos.listContainer}
          />
          <Text style={estilos.total}>Total: R$ {calcularTotal()}</Text>
          
          <TouchableOpacity
            style={estilos.confirmButton}
            onPress={handleConfirmarPedido}
          >
            <Text style={estilos.confirmButtonText}>Confirmar Pedido</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={estilos.emptyCart}>Seu carrinho está vazio.</Text>
      )}
    </SafeAreaView>
  );
}

const estilosClaros = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff5e6', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#ff914d', 
  },
  listContainer: {
    paddingBottom: 16,
  },
  item: {
    backgroundColor: '#ffe0cc', 
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ff914d', 
  },
  itemText: {
    fontSize: 16,
    color: '#333', 
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
    color: '#ff914d', 
  },
  emptyCart: {
    fontSize: 18,
    color: '#999', 
    textAlign: 'center',
    marginTop: 20,
  },
  backButton: {
    backgroundColor: '#ff914d', 
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  backButtonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#ff914d', 
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const estilosEscuros = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1e1e1e', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#ff914d', 
  },
  listContainer: {
    paddingBottom: 16,
  },
  item: {
    backgroundColor: '#333', 
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ff914d', 
  },
  itemText: {
    fontSize: 16,
    color: '#ccc', 
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
    color: '#ff914d', 
  },
  emptyCart: {
    fontSize: 18,
    color: '#aaa', 
    textAlign: 'center',
    marginTop: 20,
  },
  backButton: {
    backgroundColor: '#ff914d', 
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  backButtonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#ff914d', 
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});


