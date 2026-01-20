import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen({ navigation }) {
  //  Theme locked
  const handleThemePress = () => {
    Alert.alert(
      "Premium Feature",
      "Dark & Light themes are available in Premium.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Go Premium",
          onPress: () => navigation.navigate("Premium"),
        },
      ]
    );
  };
   const handleLogout = () => {
      Alert.alert(
        'Logout',
        'Are you sure you want to logout?',
        [
          { text: 'Cancel' },
          {
            text: 'Logout',
            onPress: () => navigation.replace('Login'),
          },
        ]
      );
    };

  // 🗑 Delete all entries
  const handleDeleteAll = () => {
    Alert.alert(
      "Delete All Entries",
      "This will permanently delete all your diary entries.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            await AsyncStorage.removeItem("entries");
            Alert.alert("Deleted", "All entries have been deleted.");
             navigation.replace("MainTabs", {
  screen: "Home",
});
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
        {/* Premium */}
<TouchableOpacity
  style={styles.premiumCard}
  activeOpacity={0.9}
  onPress={() => navigation.navigate("Premium")}
>
  <View style={styles.premiumTop}>
    <View style={styles.premiumIconWrap}>
      <Ionicons name="star" size={22} color="#facc15" />
    </View>

    <View style={{ flex: 1 }}>
      <Text style={styles.premiumTitle}>Go Premium</Text>
      <Text style={styles.premiumSubtitle}>
        Unlock exclusive features
      </Text>
    </View>

    <Ionicons name="chevron-forward" size={22} color="#fff" />
  </View>

  <Text style={styles.premiumDescription}>
    Themes, advanced search, priority updates & more
  </Text>
</TouchableOpacity>


      {/* Theme (Locked) */}
      <TouchableOpacity style={styles.option} onPress={handleThemePress}>
        <Ionicons name="color-palette-outline" size={22} />
        <Text style={styles.optionText}>Change Theme</Text>
       
      </TouchableOpacity>

      {/* Delete */}
      <TouchableOpacity style={styles.option} onPress={handleDeleteAll}>
        <Ionicons name="trash-outline" size={22} color="red" />
        <Text style={[styles.optionText, { color: "red" }]}>
          Delete All Entries
        </Text>
      </TouchableOpacity>
<TouchableOpacity
  style={styles.option}
  onPress={() => navigation.navigate("ArchiveEntries")}
>
  <Ionicons name="archive-outline" size={22} />
  <Text style={styles.optionText}>Archived Entries</Text>
</TouchableOpacity>

     
       <TouchableOpacity
              style={[styles.option]}
              onPress={handleLogout}
            >
              <Ionicons name="log-out-outline" size={22} color="#ef4444" />
              <Text style={[styles.optionText, { color: "red" }]}> Logout</Text>
            </TouchableOpacity>
{/* Privacy Policy */}
<TouchableOpacity
  style={styles.option}
  onPress={() => navigation.navigate("PrivacyPolicy")}
>
  <Ionicons name="document-text-outline" size={22} />
  <Text style={styles.optionText}>Privacy Policy</Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9fafb" },
  header: { fontSize: 26, fontWeight: "700", marginBottom: 30 },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 14,
    marginBottom: 14,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 14,
    flex: 1,
  },

  premium: {
    backgroundColor: "#219d16",
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    elevation: 2,
  },
  premiumIcon:{
    flexDirection: "row",
    gap: 10,
    
  },
  premiumCard: {
  backgroundColor: "#16a34a",
  padding: 18,
  borderRadius: 18,
  marginBottom: 20,
  elevation: 4,
},

premiumTop: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 8,
},

premiumIconWrap: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: "rgba(255,255,255,0.2)",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 14,
},

premiumTitle: {
  fontSize: 18,
  fontWeight: "700",
  color: "#fff",
},

premiumSubtitle: {
  fontSize: 13,
  color: "#dcfce7",
  marginTop: 2,
},

premiumDescription: {
  fontSize: 13,
  color: "#ecfdf5",
  marginLeft: 54,
  lineHeight: 18,
},

 
});
