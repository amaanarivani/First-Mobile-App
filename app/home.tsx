import { Link, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailsScreen() {
    const router = useRouter();
    return (
        <SafeAreaView>
            <View style={{}}>
                <Button
                    title='Back to Welcome Page'
                    color="orange"
                    onPress={() => { router.push("/") }}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.details}>Home</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    details: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#757575',
        textAlign: 'center'
    },
});
