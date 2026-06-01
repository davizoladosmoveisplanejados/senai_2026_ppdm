import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import { musicas } from "../dados/musicas";

export default function Musica({ route, navigation }) {
  const { musicaId } = route.params;

  const musicaAtual = musicas.find(
    (musica) => musica.id === musicaId
  );
  const indiceAtual = musicas.findIndex(
  (musica) => musica.id === musicaId
);

  const musicaAnterior = () => {
  if (indiceAtual > 0) {
    navigation.replace("Musica", {
      musicaId: musicas[indiceAtual - 1].id,
    });
  }
};

const proximaMusica = () => {
  if (indiceAtual < musicas.length - 1) {
    navigation.replace("Musica", {
      musicaId: musicas[indiceAtual + 1].id,
    });
  }
};

  if (!musicaAtual) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Música não encontrada.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity
  style={styles.backButton}
  onPress={() => navigation.goBack()}
>
  <Text style={styles.backButtonText}>← Voltar</Text>
</TouchableOpacity>
      {/* Capa */}
      <Image
        source={{ uri: musicaAtual.capa }}
        style={styles.albumCover}
      />

      {/* Informações */}
      <Text style={styles.musicTitle}>
        {musicaAtual.nome}
      </Text>

      <Text style={styles.artistName}>
        {musicaAtual.artista}
      </Text>

      {/* Favorito */}
      <Text style={styles.favorite}>
        {musicaAtual.favorito ? "❤️ Favorita" : "🤍 Não favoritada"}
      </Text>

      {/* Barra de reprodução */}
      <View style={styles.progressBar}>
        <View style={styles.progress} />
      </View>

      <View style={styles.timeContainer}>
        <Text style={styles.time}>1:24</Text>
        <Text style={styles.time}>3:45</Text>
      </View>

      {/* Controles */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={musicaAnterior}>
  <Text style={styles.controlButton}>⏮</Text>
</TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.controlButton}>⏸</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={proximaMusica}>
  <Text style={styles.controlButton}>⏭</Text>
</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  albumCover: {
    width: 280,
    height: 280,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#006437",
    marginBottom: 30,
  },

  musicTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#006437",
    textAlign: "center",
  },

  artistName: {
    fontSize: 18,
    color: "#666",
    marginTop: 8,
    textAlign: "center",
  },

  favorite: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: "600",
    color: "#ff0000",
  },

  progressBar: {
    width: "100%",
    height: 8,
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    marginTop: 35,
  },

  progress: {
    width: "45%",
    height: "100%",
    backgroundColor: "#006437",
    borderRadius: 10,
  },

  timeContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  time: {
    color: "#666",
    fontSize: 14,
  },

  controls: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    gap: 30,
  },

  controlButton: {
    fontSize: 42,
    color: "#006437",
  },

  errorText: {
    color: "#ff0000",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
  position: "absolute",
  top: 50,
  left: 20,
  backgroundColor: "#006437",
  paddingVertical: 10,
  paddingHorizontal: 15,
  borderRadius: 10,
},

backButtonText: {
  color: "#ffffff",
  fontSize: 16,
  fontWeight: "bold",
},
});