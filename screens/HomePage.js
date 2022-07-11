import React from 'react';
import { View, ScrollView, Pressable, Text } from 'react-native';
import BottomBar, { BottomBarIcons } from '../components/homescreen/BottomBar';
import { getAuth, signOut } from 'firebase/auth';

export default function LandingPage({navigation}) {

  function handleSignOut(){
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('odjava');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <View style={{flex:1, justifyContent:'center'}}>
        <ScrollView>
          <Pressable onPress={handleSignOut} >
            <Text>Sign out</Text>
          </Pressable>
        </ScrollView>
        <BottomBar icons={BottomBarIcons}/>
    </View>
  )
}
