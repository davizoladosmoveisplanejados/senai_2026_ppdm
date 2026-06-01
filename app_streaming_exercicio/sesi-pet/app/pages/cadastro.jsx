import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from 'react-native-web';

const { width } = Dimensions.get('window');

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={estilos.safeArea}>
      <View style={estilos.container}>

        <View style={estilos.card}>
          <Text style={estilos.titulo}>Bem-vindo 👋</Text>
          <Text style={estilos.subtitulo}>
            Faça seu cadastro
          </Text>

          <TextInput
            placeholder="Digite seu usuário"
            placeholderTextColor="#777"
            style={estilos.input}
          />
          <TextInput
            placeholder="Digite seu email"
            placeholderTextColor="#777"
            style={estilos.input}
          />

          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#777"
            secureTextEntry={true}
            style={estilos.input}
          />
          <TextInput
            placeholder="Confirme sua senha"
            placeholderTextColor="#777"
            secureTextEntry={true}
            style={estilos.input}
          />

          <TouchableOpacity
            style={estilos.botao}
            onPress={() => navigation.replace('Principal')}
          >
            <Text style={estilos.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.replace('Login')}
          >
            <Text style={estilos.link}>
              Já tem conta? Clique aqui
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#006437",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: width > 500 ? 420 : "100%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#006437",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 25,
  },

  input: {
    width: "100%",
    height: 55,
    borderWidth: 2,
    borderColor: "#006437",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#ffffff",
  },

  botao: {
    backgroundColor: "#006437",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#006437",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  textoBotao: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },

  link: {
    color: "#ff0000",
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
    fontWeight: "600",
  },
});