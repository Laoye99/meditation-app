import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';

interface CustomButtonProps {
    onPress: () => void;
    title: str
}

const CustomButton = () => {
  return (
    <TouchableOpacity>
      <Text>CustomButton</Text>
    </TouchableOpacity>
  );
}

export default CustomButton