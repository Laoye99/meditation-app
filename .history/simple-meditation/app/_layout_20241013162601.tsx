import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

//This will prevent the splash screen from auto hiding until loading all the font assets  
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded) return null;
    if (!fontsLoaded && !e)

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
            <Stack.Screen name="index" options={{ headerShown: false}}/>
            <Stack.Screen 
            name="meditate/[id]" 
            options={{ headerShown: false}}
            />
        </Stack>
    );
}