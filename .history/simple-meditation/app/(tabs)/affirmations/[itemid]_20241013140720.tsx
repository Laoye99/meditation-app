import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'

const AffirmationPractice = () => {
    const { itemId } = useLocalSearchParams();

    const [affirmation, setAffirmation] = useState<

    useEffect(() => {

    }, [])
  return (
    <View className='flex-1'>
      <Text>AffirmationPractice</Text>
    </View>
  )
}

export default AffirmationPractice