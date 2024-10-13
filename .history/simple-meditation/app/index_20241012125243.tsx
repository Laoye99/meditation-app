import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import beachImage from '@/assets/meditation-images/beach.webp';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <View className='flex-1'>
      <ImageBackground
      source={beachImage}
      resizeMode='cover'
      className='flex-1'>
        <LinearGradient className='flex-1' colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']} >
          <SafeAreaView>
          <Text className='text-center text-white font-bold text-4xl'>
            App
            </Text>
          </SafeAreaView>
        </LinearGradient>

      </ImageBackground>
    </View>
  )
}

export default App