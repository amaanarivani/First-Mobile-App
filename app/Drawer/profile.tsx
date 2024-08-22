import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { usePathname, useRouter } from 'expo-router';
import TabNavigation from '@/components/TabNavigation';
import { Button, Modal, PaperProvider, Portal } from 'react-native-paper';

const profile = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20, };
  const pathname = usePathname();
  const router = useRouter();
  return (
    <PaperProvider>
      <Portal>
        <Modal visible={modalVisible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ marginHorizontal: "10%", width: "80%" }}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
          <Button mode='text' onPress={() => { hideModal() }} style={{ flexDirection: "row-reverse" }}>ok</Button>
          <Button mode='text' onPress={() => { hideModal() }} style={{ flexDirection: "row-reverse" }}>cancel</Button>
        </Modal>
      </Portal>
      <Button mode="contained" style={{ marginHorizontal: "10%", marginTop: 30, width: "80%" }} onPress={showModal}>
        Show Modal
      </Button>
      <TabNavigation pathname={pathname} />
    </PaperProvider>


    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    // </View>
  )
}

export default profile;

const styles = StyleSheet.create({})