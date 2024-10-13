import { View, Text } from 'react-native'
import React from 'react'
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';

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
        <View>
            
        </View>
    </View>
  )
}

export default GuidedAffirmationsGallery