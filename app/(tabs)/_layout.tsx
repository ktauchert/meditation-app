import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary
      }}
    >
      <Tabs.Screen name="nature-meditation" options={{
        tabBarLabel: "Meditieren",
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="meditation" size={24} color={color} />
      }} />
      <Tabs.Screen name="affirmations" options={{
        tabBarLabel: "Affirmations",
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="arm-flex" size={24} color={color} />
      }} />
    </Tabs>
  )
}

export default TabsLayout