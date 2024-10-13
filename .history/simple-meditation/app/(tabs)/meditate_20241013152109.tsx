import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import MEDITATION_IMAGES from '@/constants/meditation-images'

const Meditate = () => {
  return (
    <View>
        <ImageBackground 
        source={MEDITATION_IMAGES[0]}
        resizeMode='cover'
        className='flex-1'
        >

        </ImageBackground>
      <Text>Meditate</Text>
    </View>
  )
}

export default Meditate;