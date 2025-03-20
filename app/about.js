import { View, Text, StyleSheet} from "react-native";
import { Link } from "expo-router";

export default function Screen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página de Sobre</Text>

            <Link href="/" style={styles.button}>Voltar para Home</Link>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#deb4d7",
        borderRadius: 5,
        padding: 10,
        textAlign: "center",
        color: "white",
    },
});

