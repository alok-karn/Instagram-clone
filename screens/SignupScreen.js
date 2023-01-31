import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import SignupForm from "../components/signupScreen/SignupForm";

const INSTAGRAM_LOGO = require("../assets/instagram_logo.png");

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={INSTAGRAM_LOGO}
                    style={{ height: 100, width: 100 }}
                />
            </View>
            <SignupForm navigation={navigation} />
        </View>
    );
};

export default SignupScreen;

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
