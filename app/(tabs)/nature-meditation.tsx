import { View, Text, FlatList, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'

import { MEDITATION_DATA } from '@/constants/mediation-data';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const NatureMeditation = () => {
  return (
    <View className='flex-1'>
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className='mb-6'>
          <Text
            className='text-gray-200 mb-3 font-bold text-4xl text-left'
          >Welcome Traveller</Text>
          <Text className='text-indigo-100 text-xl font-medium'>
            Choose your meditation and start
          </Text>
        </View>
        <View className='flex-1'>
          <FlatList className='' data={MEDITATION_DATA} keyExtractor={(item) => item.id.toString()} showsVerticalScrollIndicator={false} renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push(`meditate/${item.id}`)}
              className='h-48 rounded-xl overflow-hidden mb-5 shadow-lg'
            >
              <ImageBackground source={MEDITATION_IMAGES[item.id - 1]} resizeMode='cover' className='flex-1'>
                <LinearGradient colors={['transparent', '#33333388', '#000000ff']} className='flex-1'>
                  <Text className='font-bold text-xl text-cyan-100 absolute bottom-2 left-2'>{item.title}</Text>
                </LinearGradient>
              </ImageBackground>
            </Pressable>
          )} />
        </View>
      </AppGradient>
    </View>
  )
}

export default NatureMeditation