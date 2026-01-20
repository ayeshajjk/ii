import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function PrivacyPolicyScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      <Text style={styles.header}>Privacy Policy</Text>

      <Text style={styles.sectionTitle}>1. Introduction</Text>
      <Text style={styles.text}>
        Welcome to Daily Diary. Your privacy is important to us. This Privacy Policy explains
        how we collect, use, and protect your information.
      </Text>

      <Text style={styles.sectionTitle}>2. Information We Collect</Text>
      <Text style={styles.text}>
        - Diary entries you create (titles, content, date).{'\n'}
        - Preferences and app settings.{'\n'}
        - Device information for app optimization.
      </Text>

      <Text style={styles.sectionTitle}>3. How We Use Your Information</Text>
      <Text style={styles.text}>
        - To save and display your diary entries.{'\n'}
        - To provide a better app experience.{'\n'}
        - To implement premium features and backups.
      </Text>

      <Text style={styles.sectionTitle}>4. Data Security</Text>
      <Text style={styles.text}>
        We store your diary entries locally on your device using secure storage.
        We do not share your entries with any third-party without your consent.
      </Text>

      <Text style={styles.sectionTitle}>5. Premium Services</Text>
      <Text style={styles.text}>
        Any data related to premium features (like cloud backup) will be used solely to
        provide the paid services you opted for.
      </Text>

      <Text style={styles.sectionTitle}>6. Contact Us</Text>
      <Text style={styles.text}>
        For any questions or concerns regarding this privacy policy, contact us at:
        support@dailydiaryapp.com
      </Text>

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 5,
    color: "#16a34a",
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
  },
  footer: {
    marginTop: 30,
    textAlign: "center",
    color: "#888",
    fontSize: 12,
  },
});
