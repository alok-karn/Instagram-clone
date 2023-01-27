import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AddNewPost from "../components/newPost/AddNewPost";

export default function NewPostScreen() {
    return (
        <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
            <AddNewPost />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
