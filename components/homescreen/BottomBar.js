import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, Easing } from 'react-native';
import HomeIcon from '../../assets/home.png';
import SearchIcon from '../../assets/find.png';
import ChatIcon from '../../assets/conversation.png';
import UserIcon from '../../assets/user.png';

export const BottomBarIcons = [
  {
    name: 'Home',
    num: 0,
    image: HomeIcon
  },
  {
    name: 'Explore',
    num: 1,
    image: SearchIcon
  },
  {
    name: 'Chat',
    num: 2,
    image: ChatIcon
  },
  {
    name: 'Profile',
    num: 3,
    image: UserIcon
  }
]

const BottomBar = ({icons}) => {

  const [active, setActive] = useState('Home');
  const [activeNum, setActiveNum] = useState(0);
  const activeBar = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(activeBar, {
      toValue: activeNum,
      duration: 150,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [activeNum]);

  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveNum(icon.num)}>
      <Image source={icon.image} style={active === icon.num ? styles.iconActive : styles.icon}/>
    </TouchableOpacity>
  )

    return(
      <>
      <Animated.View style={{
          left: activeBar.interpolate({
            inputRange: [0, 1, 2, 3],
            outputRange: ['0%', '25%', '50%', '75%'],
          }),
          width: '25%',
          height: 20,
          marginBottom: -15,
          zIndex: 1,
          backgroundColor: '#eee',
          borderRadius: 10,
          borderTopWidth: 3,
          borderTopColor: 'orange',
        }} />
      <View style={styles.container}>
          {icons.map((icon, index) => (
            <Icon icon={icon} key={index} />
          ))}
      </View>
      </>
    )
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  
  iconActive: {
    width: 30,
    height: 30,
    borderBottomWidth: 2,
    transform: [{scale: 1.05}],
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'end',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 3,
    borderTopColor: '#ddd',
    backgroundColor: '#eee',
  },
})

export default BottomBar