import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import beachImage from '@/assets/meditation-images/beach.webp'
import 

const App = () => {
  return (
    <View className='flex-1'>
      <ImageBackground
      source={beachImage}
      resizeMode='cover'
      className='flex-1'>
        <LinearGradient>

        </LinearGradient>
<Text>App</Text>
      </ImageBackground>
    </View>
  )
}

export default App