import { Link, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailsScreen() {
    const router = useRouter();
    return (
        <SafeAreaView>
            <View style={{}}>
                <Button
                    title='Back to Home'
                    color="orange"
                    onPress={() => { router.push("/") }}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.details}>Details</Text>
            </View>
            {/* Works Only for IOS */}
            {/* <View style={{ marginVertical: 20 }}>
                <Button
                    color='orange'
                    title='Click me to Enter Details'
                    onPress={() => Alert.prompt('Details', "Type your details below!", text => alert(text))
                    }
                />
            </View> */}
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
