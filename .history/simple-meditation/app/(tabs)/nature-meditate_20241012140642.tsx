import { View, Text } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'

const NatureMeditate = () => {
  return (
    <View className='flex-1'>
        <AppGradient colors={["#161b2e", "#0a4d4a","#766e67"]}>
        <View className='mb-6'>
            <Text className='text-gray-200 mb-3 font-bold text'>NatureMeditate</Text>
        </View>
        </AppGradient>
    </View>
  )
}

export default NatureMeditate