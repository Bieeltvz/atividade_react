import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function RegistroScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#aaa" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#aaa" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 25,
    paddingHorizontal: 15,
    color: "#fff",
    marginBottom: 15,
    backgroundColor: "#222",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#1DB954",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
