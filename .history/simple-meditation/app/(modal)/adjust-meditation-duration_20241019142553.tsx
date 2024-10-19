import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import CustomButton from '@/components/CustomButton'

const AdjustMeditationDuration = () => {

    const handlePress = {duration: number} => {
        router.back()
    };
  return (
    <View className='flex-1 relative'>
        <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}> 
            <Text>Test</Text>
            <Pressable onPress={() => router.back()} 
            className='absolute top-8 left-6 z-10'
            >
            <AntDesign name="leftcircleo" size={50} color="white" />
            </Pressable>
            <View className='justify-center h-4/5'>
            <Text className='text-center font-bold text-3xl text-white mb-8'>
                Adjust your meditation 
                </Text>

                <View>
                    <CustomButton 
                    title='10 seconds'
                    onPress={()=> console.log('10 seconds')}
                    containerStyles='mb-5'
                    />
                    <CustomButton 
                    title='5 minutes'
                    onPress={()=> console.log('10 seconds')}
                    containerStyles='mb-5'
                    />
                    <CustomButton 
                    title='10 minutes'
                    onPress={()=> console.log('10 seconds')}
                    containerStyles='mb-5'
                    />
                    <CustomButton 
                    title='15 minutes'
                    onPress={()=> console.log('10 seconds')}
                    containerStyles='mb-5'
                    />
                </View>
            </View>
        </AppGradient>
    </View>
  )
}

export default AdjustMeditationDuration