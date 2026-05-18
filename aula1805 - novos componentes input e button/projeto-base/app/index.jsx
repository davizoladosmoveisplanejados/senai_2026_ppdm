import { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, FlatList, StyleSheet, Image, TextInput } from "react-native";
import Logo from '../assets/tudo3.jpg';

export default function Index() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function Login(){
    console.log('Dados do Login');
    console.log({email, senha});
  }

  return (
    <ScrollView>
      <Image />
    </ScrollView>
  );
};
