import { Dimensions, StyleSheet, Text, View } from "react-native";

import { LineChart, PieChart } from "react-native-chart-kit";
const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",

  decimalPlaces: 0,

  color: (opacity = 1) => `rgba(37, 99, 235, ${opacity})`,

  labelColor: (opacity = 1) => `rgba(15, 23, 42, ${opacity})`,

  propsForDots: {
    r: "5",
    strokeWidth: "2",
    stroke: "#2563eb",
  },
};
export default function Dashboard({ navigation }) {
  const screenWidth = Dimensions.get("window").width;
  const graficWidth = screenWidth - 70;
  const dadosGraficoLinha = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
    ],
    datasets: [
      {
        data: [20, 30, 45, 67, 69, 42, 6],
        color: (opacity = 1) => `rgba(26, 71, 251, ${opacity})`,
      },
    ],
    legend: ["Medições"],
  };
  const dadosGraficoPizza = [
    {
      name: "Jardim Aeroporto",
      temp: 27,
      color: "blue",
      legendFontColor: "#1e293b ",
      legendFontSize: 12,
    },
    {
      name: "Jardim Esplanada",
      temp: 30,
      color: "red",
      legendFontColor: "#1e293b ",
      legendFontSize: 12,
    },
    {
      name: "Santa Rosa",
      temp: 24,
      color: "pink",
      legendFontColor: "#1e293b ",
      legendFontSize: 12,
    },
    {
      name: "Jardim Sampaio I",
      temp: 32,
      color: "green",
      legendFontColor: "#1e293b ",
      legendFontSize: 12,
    },
  ];
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>🌤 Clima em Tempo Real</Text>

      <View style={estilos.card}>
        <Text style={estilos.tituloCard}>Histórico de Medições</Text>

        <LineChart
          data={dadosGraficoLinha}
          width={graficWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
        />
      </View>

      <View style={estilos.card}>
        <Text style={estilos.tituloCard}>Temperatura por Região</Text>

        <PieChart
          data={dadosGraficoPizza}
          width={graficWidth}
          height={220}
          accessor="temp"
          chartConfig={chartConfig}
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </View>
    </View>
  );
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f2fe",
    padding: 15,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0f172a",

    marginTop: 20,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",

    borderRadius: 20,

    padding: 15,

    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.1,
    shadowRadius: 6,

    elevation: 5,
  },

  tituloCard: {
    fontSize: 18,
    fontWeight: "600",

    textAlign: "center",

    marginBottom: 15,

    color: "#1e293b",
  },
});
