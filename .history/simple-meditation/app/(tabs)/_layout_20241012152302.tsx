import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ 
        headerShown: false, 
        tabBarActiveTintColor: Colors.primary }}
    >
        <Tabs.Screen name='nature-meditate'
        options={{
            tabBarLabel: 'Meditate',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="flower-tulip" size={24} color= {} />
            )
        }}
        />
    </Tabs>
  )
}

export default TabsLayout