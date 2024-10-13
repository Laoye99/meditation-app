import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'

const AffirmationPractice = () => {
    const { itemId } = useLocalSearchParams();

    const [affirmatio]

    useEffect(() => {

    }, [])
  return (
    <View className='flex-1'>
      <Text>AffirmationPractice</Text>
    </View>
  )
}

export default AffirmationPractice