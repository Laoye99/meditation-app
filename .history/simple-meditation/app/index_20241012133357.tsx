import { View, Text, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import beachImage from '@/assets/meditation-images/beach.webp';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';

const App = () => {

  const router = useRouter()
  return (
    <View className='flex-1'>
      <ImageBackground
      source={beachImage}
      resizeMode='cover'
      className='flex-1'>
        <LinearGradient className='flex-1' colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']} >
          <SafeAreaView className='flex-1 mx-5 my-12 justify-between'>
          <View>
            <Text className='text-center text-white font-bold text-4xl'>
            Simple Meditation
            </Text>
            <Text className='text-center text-white text-regular text-2xl mt-3'>
              Simplifying Meditation for Everyone
            </Text>
            </View>
            <View>
              <CustomButton 
              onPress={()=> console.log('tap')} 
              title='Get Started'
              />
            </View>
            <StatusBar style='light'/>
          </SafeAreaView>
        </LinearGradient>

      </ImageBackground>
    </View>
  )
}

export default App