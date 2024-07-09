import { View, Text, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { GalleryPreviewData } from '@/constants/models/AffirmationsCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmations-gallery';
import AppGradient from '@/components/AppGradient';

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>();

  useEffect(() => {
    for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
      const affirmationData = AFFIRMATION_GALLERY[i].data;
      const affirmationToStart = affirmationData.find(
        (a) => a.id === Number(itemId)
      );
      if (affirmationToStart) {
        setAffirmation(affirmationToStart);

        const affiramtionsArray = affirmationToStart.text.split(".");

        if (affiramtionsArray[affiramtionsArray.length - 1] === '') {
          affiramtionsArray.pop();
        }

        setSentences(affiramtionsArray);
        return;
      }
    }
  }, [])

  return (
    <View className='flex-1'>
      <ImageBackground
        source={affirmation?.image}
        resizeMode='cover'
        className='flex-1'
      >
        <AppGradient colors={['#ffffff11', '#00000088']}>
          <ScrollView className='mt-20'
            showsVerticalScrollIndicator={false}
          >
            <View className='h-full justify-center'>
              <View className='h-4/5 justify-center'>
                {
                  sentences?.map((sentence, idx) => (
                    <Text key={idx} className='text-white text-2xl mb-12 font-bold text-center'>{sentence}.</Text>
                  ))
                }
              </View>

            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default AffirmationPractice