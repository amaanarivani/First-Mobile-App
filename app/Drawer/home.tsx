import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import TabNavigation from '@/components/TabNavigation'
import { usePathname, useRouter } from 'expo-router'
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        Sno: "1",
        title: 'React Native',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        Sno: "2",
        title: 'Expo',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        Sno: "3",
        title: 'React Native Paper',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d64',
        Sno: "4",
        title: 'React Navigation',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d67',
        Sno: "5",
        title: 'TypeScript',
    },
];

type ItemProps = { title: string, Sno: string };
const Item = ({ title, Sno }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.serial}>{Sno}</Text>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const home = () => {
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        console.log(pathname);
        
    },[])
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: 150, marginVertical: 20, marginStart: 10 }}>
                <Button textColor='white' mode='contained-tonal' buttonColor='#9061F9' style={{}} onPress={() => router.push("/")}>Back to Login</Button>
            </View>
            <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}>Technologies Used</Text>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} Sno={item.Sno} />}
                    keyExtractor={item => item.id}
                    style={{marginBottom: 60}}
                    scrollEnabled
                />
            <TabNavigation pathname={pathname} />
        </SafeAreaView>
    )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#9061F9',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    title: {
        fontSize: 32,
        color: "#ffff"
    },
    serial: {
        fontSize: 25,
        color: "#ffff"
    },
})
