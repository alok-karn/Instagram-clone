import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import React from "react";
import LoginForm from "../components/loginScreen/LoginForm";

const INSTAGRAM_LOGO = require("../assets/instagram_logo.png");

const LoginScreen = () => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
                source={INSTAGRAM_LOGO}
                style={{ height: 100, width: 100 }}
            />
        </View>
        <LoginForm />
        <StatusBar style="auto" />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 60,
    },
});
export default LoginScreen;
