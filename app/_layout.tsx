import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
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
       options={{headerShown: false}}
        name="index" />
      <Stack.Screen options={{headerShown: false}} name="details" />
    </Stack>
  );
}
