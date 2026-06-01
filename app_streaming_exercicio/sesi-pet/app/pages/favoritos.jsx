import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { musicas } from "../dados/musicas";

export default function Favoritos({ navigation }) {
  const favoritas = musicas.filter((musica) => musica.favorito);

  const renderItem = ({ item }) => (
<TouchableOpacity
  style={styles.musicCard}
  onPress={() =>
    navigation.navigate("Musica", {
      musicaId: item.id,
    })
  }
>
  <Text style={styles.musicName}>{item.nome}</Text>
  <Text style={styles.artistName}>{item.artista}</Text>
</TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>❤️ Músicas Favoritas</Text>

      <FlatList
        data={favoritas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Nenhuma música favoritada.
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#006437",
    marginBottom: 25,
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

  emptyText: {
    fontSize: 16,
    color: "#ff0000",
    textAlign: "center",
    marginTop: 40,
    fontWeight: "500",
  },
});