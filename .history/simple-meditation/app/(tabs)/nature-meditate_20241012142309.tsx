import { View, Text, FlatList, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { MEDITATION_DATA } from '@/constants/Meditation-data'
import { MEDITATION_IMAGES } from '@/constants/meditation-images'

const NatureMeditate = () => {
  return (
    <View className='flex-1'>
        <AppGradient colors={["#161b2e", "#0a4d4a","#766e67"]}>
        <View className='mb-6'>
            <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>Welcome Ope</Text>
            <Text className='text-indigo-100 text-4xl font-medium'>Start your meditation practice today</Text>
        </View>
        <View>
            <FlatList 
            data={MEDITATION_DATA}
            className='mb-20'
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                <Pressable 
                onPress={() => console.log('press')}
                className='h-48 my-3 rounded-md overflow-hidden'>
                    <ImageBackground
                    source={MEDITATION_IMAGES[item.id -1]}
                    resizeMode='cover'
                    className='flex-1 rounded-lg justify-center'
                    >
                        <Text>{}</Text>

                    </ImageBackground>
                </Pressable>
            }}

            
            />
        </View>
        </AppGradient>
    </View>
  )
}

export default NatureMeditate