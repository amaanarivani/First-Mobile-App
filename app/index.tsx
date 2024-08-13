import { Link, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WelcomeScreen from './Screens/WelcomeScreen';

export default function HomeScreen() {
  const router = useRouter();
  return (
   <WelcomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  home: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#757575'
  },
  details: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#757575'
  }
});