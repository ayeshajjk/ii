import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
 

export default function AddEntryScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Clear inputs every time screen opens
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setTitle("");
      setContent("");
    });
    return unsubscribe;
  }, [navigation]);

  const handleSave = async () => {
    if (!title || !content) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      // 1️⃣ Get existing entries
      const storedEntries = await AsyncStorage.getItem("entries");
      const entries = storedEntries ? JSON.parse(storedEntries) : [];

      // 2️⃣ Create new entry
      const newEntry = {
        id: Date.now().toString(),
        title,
        content,
        date: new Date().toLocaleDateString(),
      };

      // 3️⃣ Save updated entries
      const updatedEntries = [newEntry, ...entries];
      await AsyncStorage.setItem("entries", JSON.stringify(updatedEntries));

      // 4️⃣ Navigate AFTER saving
      navigation.navigate("Entries");
    } catch (error) {
      Alert.alert("Error", "Failed to save entry");
    }
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.heading}> Add New Entry</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, { height: 150 }]}
        placeholder="Write your entry..."
        value={content}
        onChangeText={setContent}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Entry</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#4f46e5",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
    heading: {
    
  fontSize: 22, fontWeight: "bold", marginBottom: 20
  },
});
