import { BackHandler, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import TabNavigation from '@/components/TabNavigation'
import { useFocusEffect, usePathname, useRouter } from 'expo-router'
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const home = () => {
    const router = useRouter();
    const pathname = usePathname();
    const backHand = useRef<any>();
    const [dataSource, setDataSource] = useState([
        { id: 1, title: 'Button' },
        { id: 2, title: 'Card' },
        { id: 3, title: 'Input' },
        { id: 4, title: 'Avatar' },
        { id: 5, title: 'CheckBox' },
        { id: 6, title: 'Header' },
        { id: 7, title: 'Icon' },
        { id: 8, title: 'Lists' },
        { id: 9, title: 'Rating' },
        { id: 10, title: 'Pricing' },
        { id: 11, title: 'Avatar' },
        { id: 12, title: 'CheckBox' },
        { id: 13, title: 'Header' },
        { id: 14, title: 'Icon' },
        { id: 15, title: 'Lists' },
        { id: 16, title: 'Rating' },
        { id: 17, title: 'Pricing' },
    ]);

    const EmptyListMessage = ({ item }: any) => {
        return (
            // Flat List Item
            <Text
                style={styles.emptyListStyle}
                onPress={() => getItem(item)}>
                No Data Found
            </Text>
        );
    };

    const ItemView = ({ item }: any) => {
        return (
            // Flat List Item
            <Text
                style={styles.itemStyle}
                onPress={() => getItem(item)}>
                {item.id}
                {'.'}
                {item.title.toUpperCase()}
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const ListHeader = () => {
        //View to set in Header
        return (
            <View style={styles.headerFooterStyle}>
                <Text style={styles.textStyle}>
                    This is Header
                </Text>
            </View>
        );
    };

    const ListFooter = () => {
        //View to set in Footer
        return (
            <View style={styles.headerFooterStyle}>
                <Text style={styles.textStyle}>
                    This is Footer
                </Text>
            </View>
        );
    };

    const getItem = (item: any) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
    };
    useFocusEffect(() => {
        backHand.current = BackHandler.addEventListener("hardwareBackPress", () => {
            BackHandler.exitApp();
            console.log("22");
            return true;
        })
        return () => {
            backHand.current = BackHandler.removeEventListener("hardwareBackPress", () => null)
        }
    })
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}>This is a FlatList</Text>
            <FlatList
                data={dataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                //Header to show above listview
                ListHeaderComponent={ListHeader}
                //Footer to show below listview
                ListFooterComponent={ListFooter}
                renderItem={ItemView}
                ListEmptyComponent={EmptyListMessage}
                style={{ marginBottom: 60 }}
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
    emptyListStyle: {
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
    },
    itemStyle: {
        padding: 10,
    },
    headerFooterStyle: {
        width: '100%',
        height: 45,
        backgroundColor: '#9061F9',
    },
    textStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        padding: 7,
    },
})
