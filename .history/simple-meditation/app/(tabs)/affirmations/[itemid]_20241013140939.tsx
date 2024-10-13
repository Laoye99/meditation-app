import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';

const AffirmationPractice = () => {
    const { itemId } = useLocalSearchParams();

    const [affirmation, setAffirmation] = useState<GalleryPreviewData>();

    useEffect(() => {
        for (let idx = 0; )
    }, [])
  return (
    <View className='flex-1'>
      <Text>AffirmationPractice</Text>
    </View>
  )
}

export default AffirmationPractice