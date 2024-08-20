import { Entypo, Feather, FontAwesome, FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Pressable, StyleSheet, Text, View } from "react-native"

const TabNavigation = ({ pathname }: { pathname: string }) => {

    return (
        <View style={{ borderTopColor: "#8f8f8f44", borderTopWidth: 0.5, position: "absolute", zIndex: 700, bottom: 0, height: 60, width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignContent: "center", alignItems: "center", backgroundColor: '#fff' }}>
            <Pressable onPress={() => { router.navigate("/Drawer/home") }} >
                <View style={styles.tabItemV}>
                    <Entypo name='home' color={pathname == "/Drawer/home" ? "#9061F9" : "#8f8f8f"} size={18} />
                    <Text style={{ color: `${pathname == "/Drawer/home" ? "#9061F9" : "#8f8f8f"}`, fontSize: 12, marginTop: 4 }} >Home</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { router.navigate("/Drawer/dashboard") }} >
                <View style={styles.tabItemV}>
                    <MaterialIcons name="dashboard" color={pathname == "/Drawer/dashboard" ? "#9061F9" : "#8f8f8f"} size={18} />
                    <Text style={{ color: `${pathname == "/Drawer/dashboard" ? "#9061F9" : "#8f8f8f"}`, fontSize: 12, marginTop: 4 }} >Dashboard</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { router.navigate("/Drawer/profile") }} >
                <View style={styles.tabItemV}>
                    <FontAwesome5 name="user-alt" color={pathname == "/Drawer/profile" ? "#9061F9" : "#8f8f8f"} size={18} />
                    <Text style={{ color: `${pathname == "/Drawer/profile" ? "#9061F9" : "#8f8f8f"}`, fontSize: 12, marginTop: 4 }} >Profile</Text>
                </View>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    tabItemV: {
        display: "flex",
        alignItems: 'center'
    }
})
export default TabNavigation;