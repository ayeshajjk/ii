import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EntryDetailScreen({ route, navigation }) {
  const { entry } = route.params;

  const handleDelete = () => {
    Alert.alert("Delete Entry", "Are you sure you want to delete this entry?", [
      { text: "Cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          const stored = await AsyncStorage.getItem("entries");
          const entries = stored ? JSON.parse(stored) : [];
          const updated = entries.filter((e) => e.id !== entry.id);
          await AsyncStorage.setItem("entries", JSON.stringify(updated));
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{entry.title}</Text>
      <Text style={styles.date}>{entry.date}</Text>

      <Text style={styles.content}>{entry.content}</Text>

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, styles.edit]}
          onPress={() => navigation.navigate("AddEntry", { entry })}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.delete]}
          onPress={handleDelete}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 5 },
  date: { fontSize: 12, color: "#666", marginBottom: 20 },
  content: { fontSize: 16, lineHeight: 24 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  edit: { backgroundColor: "#4f46e5" },
  delete: { backgroundColor: "#dc2626" },
  buttonText: { color: "#fff", fontWeight: "600" },
});
