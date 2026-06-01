import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { musicas } from "../dados/musicas";

export default function TelaInicial({navigation}) {

  const destaques = [
    { id: 1, titulo: "Sertanejo Sofrência" },
    { id: 2, titulo: "Rock Anos 2000" },
    { id: 3, titulo: "As Mais Brabas do Forró" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>🎵 SounDavi</Text>
        <Text style={styles.subtitulo}>Olá, usuário!</Text>
      </View>

      {/* Destaques */}
      <Text style={styles.sectionTitle}>Destaques</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {destaques.map((item) => (
          <TouchableOpacity key={item.id} style={styles.highlightCard}>
            <Text style={styles.highlightText}>{item.titulo}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de músicas */}
      <Text style={styles.sectionTitle}>Músicas Populares</Text>

      {musicas.slice(0,3).map((musica) => (
        <TouchableOpacity key={musica.id} style={styles.musicCard} onPress={() => navigation.navigate("Musica", {
            musicaId: musica.id,
        })}>
          <Text style={styles.musicName}>{musica.nome}</Text>
          <Text style={styles.artistName}>{musica.artista}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 50,
    marginBottom: 25,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#006437",
  },

  subtitulo: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#006437",
    marginBottom: 15,
    marginTop: 10,
  },

  highlightCard: {
    width: 170,
    height: 110,
    backgroundColor: "#006437",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },

  highlightText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  musicCard: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#006437",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },

  musicName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#006437",
  },

  artistName: {
    fontSize: 15,
    color: "#666",
    marginTop: 4,
  },
});