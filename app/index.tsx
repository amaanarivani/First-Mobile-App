import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';

export default function HomeScreen() {
  const router = useRouter();
  return (
      <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
});