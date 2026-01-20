import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username == "") {
      Alert.alert("Validation Error", "Username is required.");
    } else if (!password) {
      Alert.alert("Validation Error", "Password is required");
    } else if (username === "Admin" && password === "admin@123") {
      navigation.replace("MainTabs", {
  screen: "Home",
});
    } else {
      Alert.alert("Error", "Invalid username or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.desc}>Please login into your account.</Text>
      <TextInput
        placeholder="Enter username"
        style={styles.input}
        value={username}
        onChangeText={(value) => {
          setUsername(value);
        }}
      />
      <TextInput
        placeholder="Enter password"
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        activeOpacity={0.8}
        onPress={handleLogin}
      >
        <Text style={styles.loginBtnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 60,
  },
  title: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  desc: {
    fontSize: 24,
    color: "#777",
    marginBottom: 36,
  },
  input: {
    fontSize: 24,
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 40,
    height: 60,
    marginBottom: 24,
    textAlignVertical: "top",
  },
  loginBtn: {
    backgroundColor: "#6759ff",
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 24,
  },
  loginBtnText: {
    fontSize: 24,
    color: "white",
  },
});
