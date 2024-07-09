import TimerProvider from '@/context/TimerContext';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react';

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if (!fontsLoaded) return null;
  if (!fontsLoaded && !error) return null;

  return (
    <>
      {/* <StatusBar style={'light'} /> */}
      <TimerProvider>
        <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen name='meditate/[id]' options={{ headerShown: false }} />
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='(model)/set-duration' options={{ headerShown: false, presentation: "modal" }} />
        </Stack>
      </TimerProvider>
    </>
  )
}