import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Header({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    style={styles.logo}
                    source={require("../../assets/header-logo.png")}
                />
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity
                    onPress={() => navigation.push("NewPostScreen")}>
                    <Image
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
                        }}
                        style={styles.icons}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.dot}></View>
                    <Image
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v2.png",
                        }}
                        style={styles.icons}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>2</Text>
                    </View>
                    <Image
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
                        }}
                        style={styles.icons}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20,
        marginBottom: 10,
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: "contain",
    },
    iconsContainer: {
        flexDirection: "row",
    },
    icons: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: "contain",
    },
    unreadBadge: {
        backgroundColor: "#e63e52",
        position: "absolute",
        left: 20,
        bottom: 20,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
    },
    unreadBadgeText: {
        color: "white",
        fontWeight: "600",
        fontSize: 12,
    },
    dot: {
        backgroundColor: "#e63e52",
        position: "absolute",
        top: 30,
        left: 22,
        width: 5,
        height: 5,
        borderRadius: 50,
        zIndex: 100,
    },
});
