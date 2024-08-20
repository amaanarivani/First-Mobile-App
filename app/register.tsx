import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const register = () => {
    const router = useRouter();
    const [show, setShow] = useState(true);
    return (
        <ImageBackground
            style={
                styles.background
            }
            resizeMode='stretch'
            source={{ uri: "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?cs=srgb&dl=pexels-maksgelatin-4352247.jpg&fm=jpg" }}
        >
            <Image style={styles.logo} source={require('@/assets/images/logo.png')} />
            <View style={{ width: "100%", alignItems: "center" }}>
                <Text style={styles.mainText}>Register for an Account</Text>
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
                    <View
                        style={{
                            flexDirection: "row",
                            position: "relative",
                            width: "100%",
                        }}
                    >
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm your password"
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
                    width: "90%",
                    marginVertical: 15
                }}>
                    <Button style={{ backgroundColor: "#9061F9", borderRadius: 10, paddingVertical: 5 }} mode="contained" onPress={() => { router.push("/") }}>
                        Register
                    </Button>
                </View>

                <View style={{ width: "90%", marginTop: 0 }}>
                    <View style={{ flexDirection: "row", marginBottom: 20, justifyContent: "center" }}>
                        <Text style={{ fontWeight: "600", paddingTop: 10, }}>Already have an account? </Text>
                        <Button textColor='white' mode='contained-tonal' buttonColor='#9061F9' style={{}} onPress={() => router.push("/")}>Login</Button>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default register;

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