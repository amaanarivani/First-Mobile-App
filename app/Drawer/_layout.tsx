import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from "expo-router/drawer";

const _layout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                initialRouteName='dashboard'
                screenOptions={{
                    drawerPosition: 'left',
                    drawerStyle: {
                        backgroundColor: "#9061F9",
                    },
                    drawerInactiveTintColor: "#FFFFFF",
                    drawerActiveTintColor: "#9061F9",
                    drawerActiveBackgroundColor: "#ffffff",
                }}
            >
                <Drawer.Screen
                    name="dashboard"
                    options={{
                        drawerLabel: 'Dashboard',
                        title: 'Dashboard',
                    }}
                />
                <Drawer.Screen
                    name="profile" 
                    options={{
                        drawerLabel: 'Profile',
                        title: 'Profile',
                    }}
                />
                <Drawer.Screen
                    name="index" 
                    options={{
                        drawerLabel: 'Logout',
                        title: 'Logout',
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}

export default _layout

const styles = StyleSheet.create({})