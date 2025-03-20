import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: "#deb4d7",
            },
            headerTintColor: "#fff",
            headerTintStyle: {
                fontWeight: "bold",
            },
        }}>
            <Stack.Screen name="index" options={{title: "Home"}}/>
           
        </Stack>
    )
}