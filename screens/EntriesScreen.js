import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function EntriesScreen({ navigation }) {
  const [entries, setEntries] = useState([]);

  const loadEntries = async () => {
    const stored = await AsyncStorage.getItem("entries");
    setEntries(stored ? JSON.parse(stored) : []);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadEntries();
    }, [])
  );

  // 🗑 Delete entry
  const deleteEntry = (id) => {
    Alert.alert("Delete Entry", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          const updated = entries.filter((e) => e.id !== id);
          await AsyncStorage.setItem("entries", JSON.stringify(updated));
          setEntries(updated);
        },
      },
    ]);
  };

  // 📦 Archive entry
  const archiveEntry = async (entry) => {
    const archived =
      JSON.parse(await AsyncStorage.getItem("archivedEntries")) || [];

    const updatedEntries = entries.filter((e) => e.id !== entry.id);

    await AsyncStorage.setItem("entries", JSON.stringify(updatedEntries));
    await AsyncStorage.setItem(
      "archivedEntries",
      JSON.stringify([entry, ...archived])
    );

    setEntries(updatedEntries);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.entry}
      onPress={() => navigation.navigate("EntryDetail", { entry: item })}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => archiveEntry(item)}>
          <Ionicons name="archive-outline" size={22} color="#6b7280" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => deleteEntry(item.id)}>
          <Ionicons name="trash-outline" size={22} color="#ef4444" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📚 My Entries</Text>

      {entries.length === 0 ? (
        <Text style={styles.empty}>No entries yet</Text>
      ) : (
        <FlatList
          data={entries}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },

  entry: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  title: { fontSize: 16, fontWeight: "600" },
  date: { fontSize: 12, color: "#666", marginTop: 4 },

  actions: {
    flexDirection: "row",
    gap: 14,
  },

  empty: {
    textAlign: "center",
    marginTop: 40,
    color: "#888",
  },
});
