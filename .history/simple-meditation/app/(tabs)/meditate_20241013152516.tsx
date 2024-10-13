import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import AppGradient from '@/components/AppGradient'

const Meditate = () => {
  return (
    <View>
        <ImageBackground 
        source={MEDITATION_IMAGES[0]}
        resizeMode='cover'
        className='flex-1'
        >
            <AppGradient colors={['transparent', 'rgba(0, 0, 0, 0.8']}>
            <Pressable
                
                >

            </Pressable>
            </AppGradient>
        </ImageBackground>
    </View>
  )
}

export default Meditate;