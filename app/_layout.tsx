import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#757575',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="index" />
        <Stack.Screen options={{ headerShown: false }} name="register" />
        <Stack.Screen options={{ headerShown: false }} name="Drawer" />
      </Stack>
    </PaperProvider>
  );
}
