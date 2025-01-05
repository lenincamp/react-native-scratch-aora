import { Stack } from "expo-router";
// import "react-native-reanimated";
import "../global.css";
// import { verifyInstallation } from 'nativewind';
import * as SplashScreen from 'expo-splash-screen';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Ensure to call inside a component, not globally
  // verifyInstallation();
  return (
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
      </Stack>
  );
}
