import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import SignedInStack from "./navigation";
import NewPostScreen from "./screens/NewPostScreen";

export default function App() {
    return (
        <View style={styles.container}>
            {/* <HomeScreen /> */}
            {/* <NewPostScreen /> */}
            <SignedInStack />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: Platform.OS === "android" ? 35 : 0,
    },
});
