import React from 'react';
import { Text, View, Button, ScrollView, ImageBackground, StyleSheet, Pressable } from 'react-native';
import Pozadina from '../assets/pozadina.jpg';

export default function LandingPage({navigation}) {
  return (
    <View style={styles.outter}>
        <ScrollView contentContainerStyle={styles.scrollInner}>
          <View style={styles.titleView}>
            <Text style={styles.title} >Investup</Text>
          </View>
          <View style={styles.buttonView} >
            <Pressable style={styles.buttonOutter} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>
            <Pressable style={styles.buttonOutter} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>
        </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({
  outter: {
    flex: 1,
  },

  scrollInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 120,
  },

  buttonOutter: {
    margin: 10,
  },

  buttonText: {
    color: '#333',
    padding: 20,
    paddingBottom: 8,
    paddingTop: 8,
    fontWeight: 600,
  },

  titleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 60,
    fontFamily: 'Ubuntu, system-ui',
    color: '#333',
  },
})