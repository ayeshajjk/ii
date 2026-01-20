import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const [entries, setEntries] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    loadEntries();
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filtered = entries.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.content.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  const loadEntries = async () => {
    const data = await AsyncStorage.getItem("entries");
    if (data) setEntries(JSON.parse(data));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search entries..."
        style={styles.input}
        value={query}
        onChangeText={setQuery}
      />

      {query.trim() === "" ? (
        <Text style={styles.hint}>Start typing to search 🔍</Text>
      ) : results.length === 0 ? (
        <Text style={styles.hint}>No matching entries found</Text>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.result}>{item.title}</Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#fff" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  hint: {
    textAlign: "center",
    color: "#9ca3af",
    marginTop: 40,
  },
  result: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    fontSize: 16,
  },
});
