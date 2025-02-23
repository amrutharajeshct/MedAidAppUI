import { Link } from 'expo-router/build/link/Link';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Education() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MedAid</Text>

      <TouchableOpacity style={styles.button}>         
                      <Link href="/symptomchecker">
                         <Text style={styles.button}>Check Symptoms</Text>
                      </Link>
        </TouchableOpacity>

      <View style={styles.card}>
        <Image 
          source={require('../assets/images/pcos.webp')}

          style={{ width: 330, height: 330, resizeMode: 'cover' }} 
        />
        <Text style={styles.cardTitle}>PCOS (Polycystic Ovary Syndrome)</Text>
        <Text style={{ textAlign: 'justify' }}> A metabolic disorder causing hormonal imbalances, multiple ovarian cysts, and insulin resistance.</Text>

          
          <Text style={styles.cardTitle}>Ovarian Cancer</Text>
        <Text style={{ textAlign: 'justify' }}> A cancer that starts in the ovaries, often detected late due to mild symptoms.</Text>
            
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  card: {
    width: '90%',
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    lineHeight: 20,
  },
  submitButton: {
    backgroundColor: '#FF7B7B',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
});
