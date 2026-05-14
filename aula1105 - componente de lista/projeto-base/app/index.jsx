import { Text, View, SafeAreaView, FlatList, StyleSheet, Image } from "react-native";
import Header from "./components/Header";
import tarefas from "./dados/tarefas.js";

function ItemTarefa({ item }) {
  return (
    <View style={estilos.card}>
      <Image source={item.photo} style={estilos.foto} />
      <Text style={estilos.titulo}> {item.title} </Text>
      <Text style={estilos.status}> {item.status} </Text>
      <Text style={estilos.desc}> {item.description} </Text>
    </View>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={estilos.container}>
      <Header titulo="Sesi Produtividade" />
      <FlatList 
        data = {tarefas}
        keyExtractor= {(item) => String(item.id)}
        renderItem= {({item}) => <ItemTarefa item={item} />}
      />
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 18,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 5,
  },

  foto: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },

  titulo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginTop: 14,
    marginHorizontal: 16,
  },

  status: {
    alignSelf: "flex-start",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 999,
    marginTop: 10,
    marginHorizontal: 16,
  },

  desc: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    marginTop: 12,
    marginBottom: 18,
    marginHorizontal: 16,
  },
});