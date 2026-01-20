import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PremiumScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="star" size={70} color="#facc15" />
        <Text style={styles.title}>Go Premium</Text>
        <Text style={styles.subtitle}>
          Unlock the full power of your Daily Diary
        </Text>
      </View>

      {/* Features Card */}
      <View style={styles.card}>
        <Feature icon="moon-outline" text="Dark & Light Themes" />
        <Feature icon="lock-closed-outline" text="App Lock (PIN)" />
        <Feature icon="cloud-outline" text="Cloud Backup" />
        <Feature icon="bar-chart-outline" text="Advanced Analytics" />
        <Feature icon="color-palette-outline" text="Custom Themes" />
      </View>

      {/* Price */}
      <View style={styles.priceBox}>
        <Text style={styles.price}>$2.99</Text>
        <Text style={styles.perMonth}>per month</Text>
      </View>

      {/* CTA */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Upgrade to Premium</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Cancel anytime • No ads • Secure payment
      </Text>
    </View>
  );
}

/* Feature Row Component */
const Feature = ({ icon, text }) => (
  <View style={styles.featureRow}>
    <Ionicons name={icon} size={22} color="#219d16" />
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    marginTop: 10, 
    color:"#219d16",
  },
  subtitle: {
    fontSize: 15,
    color: "#6b7280",
    marginTop: 6,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginTop: 30,
    elevation: 4,
  },

  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  featureText: {
    fontSize: 16,
    marginLeft: 12,
    fontWeight: "500",
  },

  priceBox: {
    alignItems: "center",
    marginVertical: 30,
  },
  price: {
    fontSize: 36,
    fontWeight: "800",
    color: "#219d16",
  },
  perMonth: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
  },

  button: {
    backgroundColor: "#219d16",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },

  footerText: {
    textAlign: "center",
    fontSize: 12,
    color: "#6b7280",
    marginTop: 16,
  },
});
