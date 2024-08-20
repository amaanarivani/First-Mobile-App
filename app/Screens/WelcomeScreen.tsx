import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';

function WelcomeScreen(props: any) {
    const [show, setShow] = useState(true);
    const router = useRouter();
    return (
        <ImageBackground
            style={
            {...styles.background, height: "100%", flex: 1}
            }
            resizeMode='cover'
            source={{ uri: "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?cs=srgb&dl=pexels-maksgelatin-4352247.jpg&fm=jpg" }}
        >
            <Image style={styles.logo} source={require('@/assets/images/logo.png')} />
            <View style={{ width: "100%", alignItems: "center" }}>
                <Text style={styles.mainText}>Login to your Account</Text>
                <ScrollView automaticallyAdjustKeyboardInsets keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false} style={{ width: "100%" }}>
                    <View
                        style={{
                            width: "100%",

                        }}
                    >
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor="#767676"
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            position: "relative",
                            width: "100%",
                        }}
                    >
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your password"
                            placeholderTextColor="#767676"
                            secureTextEntry={show ? true : false}
                        />
                        {!show ? (
                            <Entypo
                                onPress={(e) => {
                                    setShow(true);
                                }}
                                style={{ right: 40, top: 40, position: "absolute" }}
                                name="eye"
                                size={24}
                                color="#707070"
                            />
                        ) : (
                            <Entypo
                                onPress={(e) => {
                                    setShow(false);
                                }}
                                style={{ right: 40, top: 40, position: "absolute" }}
                                name="eye-with-line"
                                size={24}
                                color="#707070"
                            />
                        )}
                    </View>
                </ScrollView>
                <View style={{
                    marginVertical: 15,
                    width: "90%",
                }}>
                    <Button style={{ backgroundColor: "#9061F9", borderRadius: 10, paddingVertical: 5 }} mode="contained" onPress={() => { router.push("/Drawer/home") }}>
                        Login
                    </Button>
                </View>
                <View style={{ width: "90%", marginTop: 0 }}>
                    <View style={{ flexDirection: "row", marginBottom: 13, justifyContent: "center" }}>
                        <Text style={{ fontWeight: "600", paddingTop: 10 }}>Don't have an account yet? </Text>
                        <Button textColor='white' mode='contained-tonal' buttonColor='#9061F9' style={{}} onPress={() => router.push("/register")}>Register</Button>
                    </View>
                </View>
            </View>
        </ImageBackground >
    );
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 250,
        height: 100,
        marginTop: 50
    },
    mainText: {
        fontSize: 22,
        fontWeight: '900',
        marginVertical: 10
    },
    input: {
        width: "90%",
        borderRadius: 10,
        padding: 20,
        borderColor: "#D9D9D9",
        borderWidth: 1,
        backgroundColor: "#fff",
        marginTop: 20,
        marginStart: 20
    },
})