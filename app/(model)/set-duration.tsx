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

  }

  const subtractFromTimer = (amount: number) => {
    setDuration(duration - amount < 0 ? 0 : duration - amount);

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
        <View className='justify-center h-full'>
          <Text className='text-center font-bold text-3xl text-white mb-8 mt-20'>Adjust your meditation duration</Text>
          <View className='flex-1'>
            <View className='flex-1 justify-end'>
              <Text className='text-center font-bold text-4xl text-white'>Duration: {duration / 60}</Text>
            </View>
            <View className='flex-2 flex-row mb-4' >
              <CustomButton containerStyles='flex-1 m-2 bg-green-400' title='+5 Minute' onPress={() => addToTimer(5 * 60)} />
              <CustomButton containerStyles='flex-1 m-2 bg-red-400' title='-5 Minute' onPress={() => subtractFromTimer(5 * 60)} />
            </View>
            <View className='flex-4'>
              <CustomButton title='5 Minutes' onPress={() => handlePress(5 * 60)} containerStyles='w-[calc(50%-10px)] mb-2' />
              <CustomButton title='10 Minutes' onPress={() => handlePress(10 * 60)} containerStyles='w-[calc(50%-10px)] mb-2' />
              <CustomButton title='20 Minutes' onPress={() => handlePress(20 * 60)} containerStyles='w-[calc(50%-10px)] mb-2' />
              <CustomButton title='30 Minutes' onPress={() => handlePress(30 * 60)} containerStyles='w-[calc(50%-10px)] mb-2' />
            </View>
          </View>
        </View>

      </AppGradient>
    </View>
  )
}

export default SetDuration