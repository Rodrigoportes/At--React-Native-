
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTema } from "../context/TemaContext"; 

export default function CheckoutScreen({ navigation }) {
  const { temaEscuro } = useTema();
  const estilos = temaEscuro ? estilosEscuros : estilosClaros;

  const [endereco, setEndereco] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [validadeCartao, setValidadeCartao] = useState('');
  const [cvvCartao, setCvvCartao] = useState('');
  const [chavePix, setChavePix] = useState('');
  const [troco, setTroco] = useState('');

  const handleFinalizarPedido = () => {
    if (!endereco || !metodoPagamento) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    if (metodoPagamento === 'Cartão de Débito' || metodoPagamento === 'Cartão de Crédito') {
      if (!numeroCartao || !validadeCartao || !cvvCartao) {
        Alert.alert('Erro', 'Por favor, preencha todos os campos do cartão!');
        return;
      }
    }

    if (metodoPagamento === 'Pix' && !chavePix) {
      Alert.alert('Erro', 'Por favor, preencha a chave Pix!');
      return;
    }

    if (metodoPagamento === 'Dinheiro' && !troco) {
      Alert.alert('Erro', 'Por favor, informe o valor do troco!');
      return;
    }

    Alert.alert('Pedido Finalizado', `Endereço: ${endereco}\nMétodo de pagamento: ${metodoPagamento}`);
    navigation.navigate('Main');
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Checkout</Text>
      
      <TextInput
        style={estilos.input}
        placeholder="Endereço de entrega"
        placeholderTextColor={temaEscuro ? "#ffffff" : "#bdc3c7"}
        value={endereco}
        onChangeText={setEndereco}
      />
      
      <Text style={estilos.label}>Método de pagamento</Text>
      <View style={estilos.pickerContainer}>
        <Picker
          selectedValue={metodoPagamento}
          style={estilos.picker}
          onValueChange={(itemValue) => setMetodoPagamento(itemValue)}
        >
          <Picker.Item label="Selecione o método de pagamento" value="" />
          <Picker.Item label="Cartão de Débito" value="Cartão de Débito" />
          <Picker.Item label="Cartão de Crédito" value="Cartão de Crédito" />
          <Picker.Item label="Dinheiro" value="Dinheiro" />
          <Picker.Item label="Pix" value="Pix" />
        </Picker>
      </View>

      {metodoPagamento === 'Cartão de Débito' || metodoPagamento === 'Cartão de Crédito' ? (
        <>
          <TextInput
            style={estilos.input}
            placeholder="Número do cartão"
            keyboardType="numeric"
            placeholderTextColor={temaEscuro ? "#ffffff" : "#192633"}
            value={numeroCartao}
            onChangeText={setNumeroCartao}
          />
          <TextInput
            style={estilos.input}
            placeholder="Validade (MM/AA)"
            placeholderTextColor={temaEscuro ? "#ffffff" : "#192633"}
            value={validadeCartao}
            onChangeText={setValidadeCartao}
          />
          <TextInput
            style={estilos.input}
            placeholder="CVV"
            keyboardType="numeric"
            placeholderTextColor={temaEscuro ? "#ffffff" : "#192633"}
            value={cvvCartao}
            onChangeText={setCvvCartao}
          />
        </>
      ) : null}

      {metodoPagamento === 'Pix' ? (
        <TextInput
          style={estilos.input}
          placeholder="Chave Pix (e-mail, CPF ou telefone)"
          placeholderTextColor={temaEscuro ? "#ffffff" : "#192633"}
          value={chavePix}
          onChangeText={setChavePix}
        />
      ) : null}

      {metodoPagamento === 'Dinheiro' ? (
        <TextInput
          style={estilos.input}
          placeholder="Troco para quanto?"
          keyboardType="numeric"
          placeholderTextColor={temaEscuro ? "#ffffff" : "#192633"}
          value={troco}
          onChangeText={setTroco}
        />
      ) : null}

      <View style={estilos.buttonContainer}>
        <Button title="Finalizar Pedido" onPress={handleFinalizarPedido} color="#ff914d" />
      </View>
    </View>
  );
}

const estilosClaros = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fef5e7',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2c3e50',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ff914d',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 12,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    color: '#2c3e50',
    marginBottom: 8,
    fontWeight: '500',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ff914d',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  picker: {
    height: 50,
    color: '#2c3e50',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

const estilosEscuros = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#2c3e50',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ecf0f1',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ff914d',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 12,
    backgroundColor: '#34495e',
    color: '#ecf0f1',
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    color: '#ecf0f1',
    marginBottom: 8,
    fontWeight: '500',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ff914d',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#34495e',
    marginBottom: 16,
    color: '#ecf0f1',
  },
  picker: {
    height: 50,
    color: '#242829',
  },
  buttonContainer: {
    marginTop: 20,
  },
}); 





