import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useTema } from '../context/TemaContext'; 

const Pedidos = () => {
  const { temaEscuro } = useTema(); 
  const estilos = temaEscuro ? estilosEscuros : estilosClaros; 

  const pedidosMock = [
    { id: '1', nome: 'Coxinha 1', preco: 'R$ 50,00' },
    { id: '2', nome: 'Suco 2', preco: 'R$ 30,00' },
    { id: '3', nome: 'Pudim 1', preco: 'R$ 30,00' },
  ];

  useEffect(() => {
    Notifications.requestPermissionsAsync().then(({ status }) => {
      if (status !== 'granted') {
        Alert.alert('Permissão de notificação', 'Você precisa permitir notificações para continuar.');
      }
    });
  }, []);

  const handlePedidoClick = async (pedido) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Status do Pedido",
        body: `Pedido: ${pedido.nome}, Status: Em processamento`,
        sound: true,
      },
      trigger: null,
    });

    Alert.alert("Notificação enviada", `Pedido: ${pedido.nome}`);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Pedidos InfnetFood</Text>
      {pedidosMock.length > 0 ? (
        <FlatList
          data={pedidosMock}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePedidoClick(item)}>
              <View style={estilos.pedidoItem}>
                <Text style={estilos.pedidoNome}>{item.nome}</Text>
                <Text style={estilos.pedidoPreco}>{item.preco}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={estilos.emptyText}>Você ainda não fez nenhum pedido.</Text>
      )}
    </View>
  );
};

const estilosClaros = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#ff914d',
    textAlign: 'center',
  },
  pedidoItem: {
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fef5e7',
    borderLeftWidth: 5,
    borderColor: '#ff914d',
  },
  pedidoNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  pedidoPreco: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 4,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
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
    color: '#ff914d',
    textAlign: 'center',
  },
  pedidoItem: {
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#333333',
    borderLeftWidth: 5,
    borderColor: '#ff914d',
  },
  pedidoNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  pedidoPreco: {
    fontSize: 16,
    color: '#aaaaaa',
    marginTop: 4,
  },
  emptyText: {
    fontSize: 18,
    color: '#cccccc',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Pedidos;



