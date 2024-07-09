import { ImageBackground, StyleSheet, Text, View } from "react-native";
import beachImage from '@/assets/meditation-images/beach.webp';
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";


export default function App() {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode='cover'
        className="flex-1"
      >
        <AppGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>
          <View className="">
            <Text className="text-center text-4xl text-white mt-4">
              Willkommen zu
            </Text>
            <Text className="font-medium text-center text-4xl text-white ">Einfach medititeren</Text>
            <Text className="text-center text-xl text-white mt-2">
              Die einfache Art in den Tag zu starten.
            </Text>
          </View>
          <View>
            <CustomButton
              onPress={() => router.push("/nature-meditation")} title="Fang an"
            />
          </View>

        </AppGradient>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})