import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { usePathname } from 'expo-router';
import TabNavigation from '@/components/TabNavigation';

const profile = () => {
  const pathname = usePathname();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Profile!</Text>
      <TabNavigation pathname={pathname} />
    </View>
  )
}

export default profile;

const styles = StyleSheet.create({})