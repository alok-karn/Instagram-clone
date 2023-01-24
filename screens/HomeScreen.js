import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { POSTS } from "../data/posts";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <ScrollView showsVerticalScrollIndicator={true}>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
    },
});
