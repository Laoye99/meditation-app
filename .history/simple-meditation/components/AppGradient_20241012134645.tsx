import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const AppGradient = ({
    children, 
    colors,}:{
    children: any;
    colors: string[];
}) => {
  return (
    <LinearGradient colors={colors}>
      <Text>AppGradient</Text>
    </LinearGradient>
  )
}

export default AppGradient