import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(""); // usado só no web
  const router = useRouter();

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidSenha = (senha: string) => {
    return senha.length >= 6;
  };

  const showMessage = (title: string, msg?: string) => {
    if (Platform.OS === "web") {
      // web: usa alert() e também mostra mensagem na tela
      alert(title + (msg ? `: ${msg}` : ""));
      setError(title);
    } else {
      // celular: usa Alert nativo
      Alert.alert(title, msg);
    }
  };

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      showMessage("Erro", "Digite um e-mail válido!");
      return;
    }
    if (!isValidSenha(senha)) {
      showMessage("Erro", "A senha deve ter no mínimo 6 caracteres!");
      return;
    }
    setError(""); // limpa erro no web
    showMessage("Login realizado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
        }}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Só mostra no Web */}
      {Platform.OS === "web" && error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}

      <TouchableOpacity
        style={[
          styles.button,
          !(email && senha) && styles.buttonDisabled,
        ]}
        onPress={handleLogin}
        disabled={!(email && senha)}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/registro")}>
        <Text style={styles.link}>Registrar-se</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => showMessage("Tela de redefinição de senha em breve!")}
      >
        <Text style={styles.link}>Redefinir senha</Text>
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
  logo: {
    width: 80,
    height: 80,
    marginBottom: 40,
    tintColor: "#1DB954",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 25,
    paddingHorizontal: 15,
    color: "#fff",
    marginBottom: 10,
    backgroundColor: "#222",
  },
  errorText: {
    color: "red",
    marginBottom: 15,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#1DB954",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonDisabled: {
    backgroundColor: "#555",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#1DB954",
    marginTop: 10,
  },
});
