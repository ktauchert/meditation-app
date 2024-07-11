import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import meditationImages from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { Audio } from "expo-av";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/mediation-data";
import { TimerContext } from "@/context/TimerContext";
import CheckBox from "@react-native-community/checkbox";

const Meditate = () => {
  const { id } = useLocalSearchParams();
  const { duration: secondsRemaining, setDuration } = useContext(TimerContext);
  // const [secondsRemaining, setSecondsRemaining] = useState<number>(10);
  const [isMeditating, setIsMeditating] = useState<boolean>(false);
  const [audioSound, setAudioSound] = useState<Audio.Sound>();

  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [musicOn, setMusicOn] = useState<boolean>(true);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (secondsRemaining === 0) {
      return;
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setDuration(secondsRemaining - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [secondsRemaining, isMeditating]);

  useEffect(() => {
    return () => {
      audioSound?.unloadAsync();
    };
  }, [audioSound]);

  const toggleMeditationSessionStatus = async () => {
    if (secondsRemaining === 0) {
      setDuration(secondsRemaining);
    }
    setIsMeditating(!isMeditating);

    await toggleSound();
  };

  const toggleSound = async () => {
    const sound = audioSound ? audioSound : await initializeSound();

    const status = await sound?.getStatusAsync();

    if (status?.isLoaded && !isPlayingAudio && musicOn) {
      await sound.playAsync();
      setIsPlayingAudio(true);
    } else {
      await sound.pauseAsync();
      setIsPlayingAudio(false);
    }
  };

  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;

    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);

    setAudioSound(sound);
    return sound;
  };

  const handleDurationBtn = () => {
    if (isMeditating) toggleMeditationSessionStatus();
    setDuration(5 * 60)

    router.push('/(model)/set-duration');
  };
  // Format Time
  const formattedMinutesLeft = String(
    Math.floor(secondsRemaining / 60)
  ).padStart(2, "0");
  const formattedSecondsLeft = String(secondsRemaining % 60).padStart(2, "0");

  return (
    <View className="flex-1">
      <ImageBackground
        className="flex-1"
        source={meditationImages[Number(id) - 1]}
        resizeMode="cover"
      >
        <AppGradient colors={["transparent", "#00000055"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute left-4 top-4 text-white"
          >
            <AntDesign name="leftcircleo" size={34} color="white" />
          </Pressable>
          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-4xl text-zinc-900 font-rmono">
                {formattedMinutesLeft}:{formattedSecondsLeft}
              </Text>
            </View>
          </View>
          <View className="mb-0">
            <CustomButton
              title={musicOn ? 'Music on' : 'Music off'}
              onPress={() => setMusicOn(!musicOn)}
              pushed={!musicOn}
            />
            <CustomButton
              title={isMeditating ? "Stop Meditation" : "Start Meditation"}
              onPress={toggleMeditationSessionStatus}
              containerStyles="mt-3"
            />
            <CustomButton
              title={"Duration"}
              onPress={handleDurationBtn}
              containerStyles="mt-3"
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
