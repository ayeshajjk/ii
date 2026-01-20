 import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function HomeScreen({ navigation }) {
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📔 Daily Diary</Text>
      <Text style={styles.subtitle}>Welcome back!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddEntry')}
      >
        
      </TouchableOpacity>

         
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  }
});
