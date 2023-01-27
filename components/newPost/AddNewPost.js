import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FormikPostUploader from "./FormikPostUploader";

export default function AddNewPost() {
    return (
        <View style={styles.container}>
            <Header />
            <FormikPostUploader />
        </View>
    );
}

const Header = () => (
    <View style={styles.headerContainer}>
        <TouchableOpacity>
            <Image
                source={{
                    uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png",
                }}
                style={{ width: 25, height: 25 }}
            />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Post</Text>
        <Text />
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 10,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerText: {
        color: "white",
        fontWeight: "700",
        fontSize: 20,
        marginRight: 25,
    },
});
