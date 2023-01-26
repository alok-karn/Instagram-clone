import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
    {
        name: "Home",
        active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png",
        inactive:
            "https://img.icons8.com/fluency-systems-regular/144/ffffff/home.png",
    },
    {
        name: "Search",
        active: "https://img.icons8.com/ios-filled/500/ffffff/search--v1.png",
        inactive: "https://img.icons8.com/ios/500/ffffff/search--v1.png",
    },
    {
        name: "Reels",
        active: "https://img.icons8.com/ios-filled/512/ffffff/instagram-reel.png",
        inactive: "https://img.icons8.com/ios/512/ffffff/instagram-reel.png",
    },
    {
        name: "Shop",
        active: "https://img.icons8.com/fluency-systems-filled/512/ffffff/shopping-bag.png",
        inactive:
            "https://img.icons8.com/fluency-systems-regular/512/ffffff/shopping-bag.png",
    },
    {
        name: "Profile",
        active: "https://avatars.githubusercontent.com/u/53781371?v=4",
        inactive: "https://avatars.githubusercontent.com/u/53781371?v=4",
    },
];

export default function BottomTabs({ icons }) {
    const [activeTab, setActiveTab] = useState("Home");

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image
                source={{
                    uri: activeTab === icon.name ? icon.active : icon.inactive,
                }}
                style={[
                    styles.icon,
                    icon.name === "Profile" ? styles.profilePic() : null,
                    activeTab === "Profile" && icon.name === activeTab
                        ? styles.profilePic(activeTab)
                        : null,
                ]}
            />
        </TouchableOpacity>
    );
    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation="vertical" />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon icon={icon} key={index} />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        width: "100%",
        bottom: -1,
        zIndex: 999,
        backgroundColor: "black",
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 50,
        paddingTop: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    profilePic: (activeTab = "") => ({
        borderRadius: 50,
        borderWidth: activeTab === "Profile" ? 2 : 0,
        borderColor: "white",
    }),
});
