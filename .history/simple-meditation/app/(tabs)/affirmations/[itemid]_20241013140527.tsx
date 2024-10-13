import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const AffirmationPractice = () => {
    const { itemId } = useLocalSearchParams();
  return (
    <View className='flex-1'>
      <Text>AffirmationPractice</Text>
    </View>
  )
}

export default AffirmationPractice