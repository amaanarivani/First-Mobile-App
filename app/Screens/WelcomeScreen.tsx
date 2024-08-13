import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props: any) {
    const router = useRouter();
    return (
        <ImageBackground
            style={
                styles.background
            }
            resizeMode='stretch'
            source={{ uri: "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?cs=srgb&dl=pexels-maksgelatin-4352247.jpg&fm=jpg" }}
        >
            <Image style={styles.logo} source={require('@/assets/images/logo.png')} />
            <Text style={styles.mainText}>Login Or Register for an Account</Text>
            <Pressable style={styles.loginButton} onPress={() => {router.push("/details")}}>
                <Text style={styles.loginText} >Login</Text>
            </Pressable>
            {/* <View style={styles.loginButton}>
                <Button title='Login' />
            </View> */}
            <Pressable style={styles.registerButton} onPress={() => { router.push("/details") }}>
                <Text style={styles.registerText} >Register</Text>
            </Pressable>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: "100%",
        height: 70,
        // paddingVertical: 10,
        backgroundColor: '#fc5c65',
        justifyContent: "center"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: '#4ecdc4',
        justifyContent: "center"
    },
    logo: {
        width: 300,
        height: 120,
        position: 'absolute',
        top: 100
    },
    mainText: {
        fontSize: 22,
        fontWeight: '900',
        position: 'absolute',
        top: 250
    },
    loginText: {
        fontSize: 22,
        fontWeight: '700',
        color: "#fff",
        textAlign: "center",

    },
    registerText: {
        fontSize: 22,
        fontWeight: '700',
        color: "#000",
        textAlign: "center",

    }
})
export default WelcomeScreen;