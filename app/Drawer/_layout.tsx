import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from "expo-router/drawer";
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Button, Divider, Menu } from 'react-native-paper';

const CustomDrawerContent = (props: any) => {
    const router = useRouter();

    // Get the active route name
    const activeRoute = props.state.routeNames[props.state.index];

    return (
        <DrawerContentScrollView
            {...props}
            style={{ backgroundColor: "#9061F9", }}
        >
            <Pressable onPress={() => { router.push('/Drawer/profile') }}>
                <View style={styles.userInfoSection}>
                    <Image
                        source={require("@/assets/images/avatar.png")} // Ensure the correct path to your local image
                        style={styles.avatar}
                    />
                    <Text style={styles.userName}>John Doe</Text>
                </View>
            </Pressable>
            <DrawerItem
                label="Home"
                onPress={() => router.navigate('/Drawer/home')}
                focused={activeRoute === 'home'}
                style={activeRoute === 'home' ? styles.activeItem : null}
                labelStyle={activeRoute === 'home' ? styles.activeLabel : styles.inactiveLabel}
            />
            <DrawerItem
                label="Dashboard"
                onPress={() => router.navigate('/Drawer/dashboard')}
                focused={activeRoute === 'dashboard'}
                style={activeRoute === 'dashboard' ? styles.activeItem : null}
                labelStyle={activeRoute === 'dashboard' ? styles.activeLabel : styles.inactiveLabel}
            />
            <DrawerItem
                label="Profile"
                onPress={() => router.navigate('/Drawer/profile')}
                focused={activeRoute === 'profile'}
                style={activeRoute === 'profile' ? styles.activeItem : null}
                labelStyle={activeRoute === 'profile' ? styles.activeLabel : styles.inactiveLabel}
            />
            <DrawerItem
                label="Logout"
                onPress={() => router.push('/')}
                style={styles.drawerItem}
                labelStyle={styles.inactiveLabel}
            />
        </DrawerContentScrollView>
    );
};

const _layout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                initialRouteName='home'
                screenOptions={{
                    drawerPosition: 'left',
                }}
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            />
        </GestureHandlerRootView>
    );
};

export default _layout;

const styles = StyleSheet.create({
    userInfoSection: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userName: {
        marginLeft: 15,
        fontSize: 18,
        color: '#fff',
    },
    activeItem: {
        backgroundColor: '#ffffff',
    },
    activeLabel: {
        color: '#9061F9',
    },
    inactiveLabel: {
        color: '#FFFFFF',
    },
    drawerItem: {
        marginTop: 10,
    },
});
