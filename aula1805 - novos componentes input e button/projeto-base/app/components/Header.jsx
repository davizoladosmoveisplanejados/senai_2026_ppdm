import { StyleSheet, Text, View } from "react-native";

export default function Header({ titulo }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>{titulo}</Text>
      <Text style={estilos.subtitulo}>Organize as suas atividades diárias</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  wrapper: {
    backgroundColor: "#7C3AED",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,

    elevation: 6,
  },

  container: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
  },

  subtitulo: {
    fontSize: 13,
    color: "#626262",
    marginTop: 4,
  },
});
