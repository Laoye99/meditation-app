import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor}}
    ></Tabs>
  )
}

export default TabsLayout