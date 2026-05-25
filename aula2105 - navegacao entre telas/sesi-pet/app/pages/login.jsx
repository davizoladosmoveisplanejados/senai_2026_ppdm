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
            Faça login para continuar
          </Text>

          <TextInput
            placeholder="Digite seu usuário"
            placeholderTextColor="#777"
            style={estilos.input}
          />

          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#777"
            secureTextEntry={true}
            style={estilos.input}
          />

          <TouchableOpacity
            style={estilos.botao}
            onPress={() => navigation.replace('Principal')}
          >
            <Text style={estilos.textoBotao}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={estilos.link}>
              Esqueceu sua senha?
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
    backgroundColor: '#0F172A',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#0F172A',
  },

  card: {
    width: width > 500 ? 400 : '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#F1F5F9',
    borderRadius: 14,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 18,
    borderWidth: 2,
    borderColor: 'transparent',
  },

  botao: {
    width: '100%',
    height: 55,
    backgroundColor: '#22C55E',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#22C55E',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  link: {
    color: '#2563EB',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 15,
    fontWeight: '600',
  },
});