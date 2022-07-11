import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import envConfig from './env';

import LandingPage from './screens/LandingPage';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import HomePage from './screens/HomePage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: envConfig.FIREBASE_API_KEY,
  authDomain: envConfig.FIREBASE_AUTH_DOMAIN,
  projectId: envConfig.FIREBASE_PROJECT_ID,
  storageBucket: envConfig.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envConfig.FIREBASE_MESSAGING_SENDER_ID,
  appId: envConfig.FIREBASE_APP_ID,
  measurementId: envConfig.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

export default function App() {
  const [logged, setLogged] = useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if(user){
      setLogged(true);
      const uid = user.uid;
    }
    else{
      setLogged(false);
    }
  })

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      {!logged ? 
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      :
      <Stack.Navigator initialRouteName='HomePage'>
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
      }
    </NavigationContainer>
  );
}