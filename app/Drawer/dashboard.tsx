import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { usePathname, useRouter } from 'expo-router';
import TabNavigation from '@/components/TabNavigation';
import { Button, Divider, Menu, Modal, PaperProvider, Portal } from 'react-native-paper';

const dashboard = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);
  const pathname = usePathname();
  const router = useRouter();
  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          mode='elevated'
          anchor={<Button mode="contained" onPress={openMenu}>Show menu</Button>}
          anchorPosition='top'
          >
          <Menu.Item onPress={() => { }} title="Item 1" />
          <Menu.Item onPress={() => { }} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => { }} title="Item 3" />
        </Menu>
      </View>
      <TabNavigation pathname={pathname} />
    </PaperProvider>
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>My Dashboard!</Text>
    // </View>
  )
}

export default dashboard;

const styles = StyleSheet.create({})