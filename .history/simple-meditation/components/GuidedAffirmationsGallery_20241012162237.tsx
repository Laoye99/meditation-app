import { View, Text, } from 'react-native'
import React from 'react'
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { FlatList } from 'react-native-gesture-handler';

interface GuidedAffirmationsGalleryProps {
    title: string;
    previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
    title,
    previews,
}: GuidedAffirmationsGalleryProps) => {
  return (
    <View className='my-5'>
        <View className='mb-2'>
        <Text className='text-white font-bold text-xl'>{title}</Text>
        </View>
        <View className='space-y-2'>
            <FlatList data={previews}/>

        </View>
    </View>
  )
}

export default GuidedAffirmationsGallery