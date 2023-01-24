import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { USERS } from "../../data/users";

export default function Stories() {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View key={index} style={{ alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image source={story.image} style={styles.story} />
                        </TouchableOpacity>
                        <Text
                            style={{
                                color: "white",
                                marginLeft: 10,
                                marginTop: 2,
                                fontSize: 13,
                            }}>
                            {story.user.length > 11
                                ? story.user.slice(0, 10).toLowerCase() + "..."
                                : story.user.toLowerCase()}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 10,
        borderWidth: 3,
        borderColor: "#e6ab2c",
    },
});
