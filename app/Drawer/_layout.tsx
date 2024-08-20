import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from "expo-router/drawer";
import { Tabs, useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const _layout = () => {
    const Tab = createBottomTabNavigator();
    const router = useRouter();
    return (
        // <View>
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                initialRouteName='home'
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
                    name="home"
                    options={{
                        drawerLabel: 'Home',
                        title: 'Home',
                    }}
                />
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
            </Drawer>
        </GestureHandlerRootView>
        // </View>
    )
}


export default _layout

const styles = StyleSheet.create({})