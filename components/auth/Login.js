import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login(){
    const [user, setUser] = useState({
      email: '',
      password: ''
    })

    function handleLogin(){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {console.log(err)})
    }

    return (
      <View>
        <TextInput 
          placeholder='Email'
          onChangeText={(email) => setUser(prev => {return({...prev, email})})}
        />
        <TextInput 
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={(password) => setUser(prev => {return({...prev, password})})}
        />
        <Pressable onPress={handleLogin}>
          <Text>Login</Text>
        </Pressable>
      </View>
    )
  
}