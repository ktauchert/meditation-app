import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import AppGradient from '@/components/AppGradient'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import CustomButton from '@/components/CustomButton'
import { TimerContext } from '@/context/TimerContext'

const SetDuration = () => {
  const { duration, setDuration } = useContext(TimerContext);

  const handlePress = (amount: number) => {
    setDuration(amount);
    router.back();
  }

  const addToTimer = (amount: number) => {
    setDuration(duration + amount);
    router.back();
  }

  const subtractFromTimer = (amount: number) => {
    setDuration(duration - amount < 0 ? 0 : duration - amount);
    router.back();
  }

  return (
    <View className='flex-1 relative'>
      <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
        <Pressable
          onPress={() => router.back()}
          className="absolute left-4 top-4 text-white"
        >
          <AntDesign name="leftcircleo" size={34} color="white" />
        </Pressable>
        <View className='justify-center h-4/5'>
          <Text className='text-center font-bold text-3xl text-white mb-8'>Adjust your meditation duration</Text>
          <View className=''>
            <CustomButton title='5 Minutes' onPress={() => handlePress(5 * 60)} containerStyles='w-[calc(50%-10px)]' />
            <CustomButton title='10 Minutes' onPress={() => handlePress(10 * 60)} containerStyles='w-[calc(50%-10px)]' />
            <CustomButton title='20 Minutes' onPress={() => handlePress(20 * 60)} containerStyles='w-[calc(50%-10px)]' />
            <CustomButton title='30 Minutes' onPress={() => handlePress(30 * 60)} containerStyles='w-[calc(50%-10px)]' />
          </View>
        </View>

      </AppGradient>
    </View>
  )
}

export default SetDuration