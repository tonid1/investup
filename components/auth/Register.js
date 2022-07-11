import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, currentUser } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { db } from '../../App';

export default function Register(){
    const [user, setUser] = useState({
      username: '',
      email: '',
      password: '',
      group: '',
    })

    function handleRegister(){
      const auth = getAuth();
      const usersRef = collection(db, "users");
      const { username, email, password } = user;
      createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setDoc(doc(usersRef, currentUser.uid), {
          username,
          email
        })
        console.log(res)
      })
      .catch((err) => {console.log(err)})
    }

    return (
      <View>
        <TextInput 
          placeholder='Username'
          onChangeText={(username) => setUser(prev => {return({...prev, username})})}
        />
        <TextInput 
          placeholder='Email'
          onChangeText={(email) => setUser(prev => {return({...prev, email})})}
        />
        <TextInput 
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={(password) => setUser(prev => {return({...prev, password})})}
        />
        <View style={styles.outterGroupDiv}>
          <Text>I am:</Text>
          <View style={styles.innerGroupDiv}>
            <Pressable onPress={() => setUser(prev => {return({...prev, group: 'investor'})})}>
              <Text>Looking to invest</Text>
            </Pressable>
            <Pressable onPress={() => setUser(prev => {return({...prev, group: 'startup'})})}>
              <Text>Looking for investors</Text>
            </Pressable>
          </View>
        </View>
        <Pressable onPress={handleRegister}>
          <Text>Register</Text>
        </Pressable>
      </View>
    )
  
}

const styles = StyleSheet.create({

  outterGroupDiv: {
    flex: 1,
  },

  innerGroupDiv: {
    flex: 1,
    flexDirection: 'row'
  }

})