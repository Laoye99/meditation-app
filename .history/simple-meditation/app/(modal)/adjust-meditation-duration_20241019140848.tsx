import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { AntDesign } from '@expo/vector-icons'

const AdjustMeditationDuration = () => {
  return (
    <View className='flex-1 relative'>
        <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}> 
            <Text>Test</Text>
            <Pressable on>
            <AntDesign name="leftcircleo" size={50} color="white" />
            </Pressable>
        </AppGradient>
    </View>
  )
}

export default AdjustMeditationDuration