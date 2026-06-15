import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Relatorio() {
  const leituras = [
    {
      id: "1",
      horario: "12:00",
      temperatura: "26°C",
      umidade: "67%",
      qualidade: "Boa",
    },
    {
      id: "2",
      horario: "13:00",
      temperatura: "27°C",
      umidade: "69%",
      qualidade: "Boa",
    },
    {
      id: "3",
      horario: "14:00",
      temperatura: "28°C",
      umidade: "64%",
      qualidade: "Boa",
    },
    {
      id: "4",
      horario: "15:00",
      temperatura: "29°C",
      umidade: "63%",
      qualidade: "Média",
    },
  ];

  return (
    <View style={estilos.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
        }}
        style={estilos.imagem}
      />

      <Text style={estilos.titulo}>Relatório Meteorológico</Text>

      <Text style={estilos.subtitulo}>Leituras recentes da estação</Text>

      <FlatList
        data={leituras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.horario}>🕒 {item.horario}</Text>

            <Text style={estilos.info}>🌡 Temperatura: {item.temperatura}</Text>

            <Text style={estilos.info}>💧 Umidade: {item.umidade}</Text>

            <Text style={estilos.info}>
              🌤 Qualidade do Ar: {item.qualidade}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity style={estilos.botao}>
        <Text style={estilos.textoBotao}>Exportar Relatório</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f2fe",
    padding: 20,
  },

  imagem: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0f172a",
  },

  subtitulo: {
    textAlign: "center",
    color: "#64748b",
    marginBottom: 25,
    marginTop: 5,
  },

  card: {
    backgroundColor: "#fff",

    borderRadius: 15,

    padding: 15,

    marginBottom: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  horario: {
    fontWeight: "bold",
    fontSize: 17,

    marginBottom: 10,

    color: "#2563eb",
  },

  info: {
    fontSize: 15,
    color: "#334155",

    marginBottom: 4,
  },

  botao: {
    backgroundColor: "#2563eb",

    padding: 15,

    borderRadius: 12,

    alignItems: "center",

    marginTop: 10,
    marginBottom: 20,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
