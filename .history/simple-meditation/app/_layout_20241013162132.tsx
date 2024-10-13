import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
    });

    useEffect(() => {
        
    })

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