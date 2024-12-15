import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useTema } from "../context/TemaContext";

const Configuracoes = () => {
  const { temaEscuro, alternarTema } = useTema();

  const estilos = temaEscuro ? estilosEscuros : estilosClaros;

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Configurações</Text>
      <View style={estilos.linhaSwitch}>
        <Text style={estilos.texto}>Tema Escuro</Text>
        <Switch
          value={temaEscuro}
          onValueChange={alternarTema}
          thumbColor={temaEscuro ? "#f4f3f4" : "#f4f3f4"}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
      </View>
    </View>
  );
};

const estilosClaros = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
  },
  linhaSwitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  texto: {
    fontSize: 18,
    color: "#000000",
  },
});

const estilosEscuros = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  linhaSwitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  texto: {
    fontSize: 18,
    color: "#ffffff",
  },
});

export default Configuracoes;