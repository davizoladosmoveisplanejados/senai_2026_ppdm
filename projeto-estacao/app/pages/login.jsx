import { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Img from "../../assets/img.jpg";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={estilos.container}>
      <View style={estilos.card}>
        <Image source={Img} style={estilos.logo} resizeMode="cover" />
        <Text style={estilos.titulo}>🌤 Estação Meteorológica</Text>

        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#94a3b8"
          value={usuario}
          onChangeText={setUsuario}
          style={estilos.input}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#94a3b8"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          style={estilos.input}
        />

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => navigation.replace("Inicio")}
        >
          <Text style={estilos.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.botaoSecundario}
          onPress={() => navigation.navigate("Registro")}
        >
          <Text style={estilos.textoSecundario}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bae6fd",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 400,

    backgroundColor: "rgba(255,255,255,0.95)",

    borderRadius: 25,

    padding: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,

    elevation: 6,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0f172a",

    marginBottom: 30,
  },

  input: {
    backgroundColor: "#f8fafc",

    borderWidth: 1,
    borderColor: "#cbd5e1",

    borderRadius: 12,

    paddingHorizontal: 15,
    paddingVertical: 14,

    fontSize: 16,

    marginBottom: 15,
  },

  botao: {
    backgroundColor: "#2563eb",

    paddingVertical: 15,

    borderRadius: 12,

    alignItems: "center",

    marginTop: 10,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 20,

    borderWidth: 3,
    borderColor: "#38bdf8",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  botaoSecundario: {
    marginTop: 18,
    alignItems: "center",
  },

  textoSecundario: {
    color: "#2563eb",
    fontWeight: "600",
    fontSize: 15,
  },
});
