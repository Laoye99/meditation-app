import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import AppGradient from '@/components/AppGradient'
import { router } from 'expo-router'

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
                onPress={() => router.back()}
                >

            </Pressable>
            </AppGradient>
        </ImageBackground>
    </View>
  )
}

export default Meditate;