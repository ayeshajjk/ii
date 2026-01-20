 import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

export default function ArchiveEntriesScreen({ navigation }) {
  const [archivedEntries, setArchivedEntries] = useState([]);

  const loadArchivedEntries = async () => {
    const data = await AsyncStorage.getItem("archivedEntries");
    setArchivedEntries(data ? JSON.parse(data) : []);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadArchivedEntries();
    }, [])
  );

  const restoreEntry = async (entry) => {
    const activeEntries =
      JSON.parse(await AsyncStorage.getItem("entries")) || [];

    const updatedArchive = archivedEntries.filter(
      (item) => item.id !== entry.id
    );

    await AsyncStorage.setItem(
      "entries",
      JSON.stringify([entry, ...activeEntries])
    );
    await AsyncStorage.setItem(
      "archivedEntries",
      JSON.stringify(updatedArchive)
    );

    setArchivedEntries(updatedArchive);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("EntryDetail", { entry: item })
      }
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>
          {item.title || "Untitled Entry"}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      <TouchableOpacity onPress={() => restoreEntry(item)}>
        <Ionicons
          name="arrow-undo-outline"
          size={22}
          color="#4f46e5"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Archived Entries</Text>

      {archivedEntries.length === 0 ? (
        <Text style={styles.empty}>No archived entries</Text>
      ) : (
        <FlatList
          data={archivedEntries}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9fafb",
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: "#6b7280",
  },
  empty: {
    textAlign: "center",
    color: "#6b7280",
    marginTop: 50,
  },
});
