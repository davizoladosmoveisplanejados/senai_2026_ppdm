import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Cadastro() {
  const [temp, setTemp] = useState("");
  const [hum, setHum] = useState("");
  const [vento, setVento] = useState("");
  return (
    <ScrollView
      contentContainerStyle={estilos.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={estilos.titulo}>🌡 Cadastro de Medição</Text>

      <Text style={estilos.label}>Temperatura</Text>
      <TextInput
        placeholder="0°C"
        placeholderTextColor="#94a3b8"
        value={temp}
        onChangeText={setTemp}
        style={estilos.input}
      />

      <Text style={estilos.label}>Umidade</Text>
      <TextInput
        placeholder="0%"
        placeholderTextColor="#94a3b8"
        value={hum}
        onChangeText={setHum}
        style={estilos.input}
      />

      <Text style={estilos.label}>Vento</Text>
      <TextInput
        placeholder="0 Km/h"
        placeholderTextColor="#94a3b8"
        value={vento}
        onChangeText={setVento}
        style={estilos.input}
      />

      <TouchableOpacity style={estilos.botao}>
        <Text style={estilos.textoBotao}>Salvar Medição</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,

    backgroundColor: "#e0f2fe",

    padding: 20,

    justifyContent: "center",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",

    textAlign: "center",

    color: "#0f172a",

    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",

    color: "#334155",

    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    backgroundColor: "#ffffff",

    borderWidth: 1,
    borderColor: "#cbd5e1",

    borderRadius: 12,

    paddingHorizontal: 15,
    paddingVertical: 14,

    fontSize: 16,

    marginBottom: 10,
  },

  botao: {
    backgroundColor: "#2563eb",

    paddingVertical: 15,

    borderRadius: 12,

    alignItems: "center",

    marginTop: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 4,
  },

  textoBotao: {
    color: "#fff",

    fontSize: 16,
    fontWeight: "600",
  },
});
