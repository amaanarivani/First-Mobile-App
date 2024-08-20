import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { usePathname } from 'expo-router';
import TabNavigation from '@/components/TabNavigation';

const dashboard = () => {
  const pathname = usePathname();
  return (
    // <SafeAreaView>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Dashboard!</Text>
      <TabNavigation pathname={pathname} />
    </View>
    // </SafeAreaView>
  )
}

export default dashboard;

const styles = StyleSheet.create({})