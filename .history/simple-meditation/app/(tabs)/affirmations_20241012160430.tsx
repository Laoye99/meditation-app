import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'

const Affirmations = () => {
  return (
    <View className='flex-1'>
        <AppGradient colors={['#2e1f58','#54426b','#a790af']}>
            <ScrollView>
                
            </ScrollView>
        </AppGradient>
      <Text>Affirmations</Text>
    </View>
  )
}

export default Affirmations