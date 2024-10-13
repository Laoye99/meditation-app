import { View, Text } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'

const NatureMeditate = () => {
  return (
    <View className='flex-1'>
        <AppGradient colors={["#161b2e", "#0a4d4a","#766e67"]}>
        <View className='mb-6'>
            <Text className=''>NatureMeditate</Text>
        </View>
        </AppGradient>
    </View>
  )
}

export default NatureMeditate