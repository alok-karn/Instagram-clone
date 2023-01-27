import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements";

const PLACEHOLDER_IMG =
    "https://t3.ftcdn.net/jpg/03/45/05/92/360_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg";

const uploadPostSchema = Yup.object().shape({
    imageURL: Yup.string().url().required("Image URL is required"),
    caption: Yup.string().max(
        2200,
        "Caption has reached the character limits."
    ),
});

export default function FormikPostUploader() {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

    return (
        <Formik
            initialValues={{ imageURL: "", caption: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={uploadPostSchema}
            validateOnMount={true}>
            {({
                handleBlur,
                handleChange,
                handleSubmit,
                values,
                errors,
                isValid,
            }) => (
                <>
                    <View
                        style={{
                            margin: 20,
                            justifyContent: "space-between",
                            flexDirection: "row",
                        }}>
                        <Image
                            source={{ uri: PLACEHOLDER_IMG }}
                            style={{ width: 100, height: 100 }}
                        />
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <TextInput
                                style={{ color: "white", fontSize: 15 }}
                                placeholder="Write a caption..."
                                placeholderTextColor="gray"
                                multiline={true}
                                onChangeText={handleChange("caption")}
                                onBlur={handleBlur("caption")}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <Divider width={0.2} orientation="vertical" />
                    <TextInput
                        style={{ color: "white", fontSize: 18 }}
                        placeholder="Enter image URL..."
                        placeholderTextColor="gray"
                        onChangeText={handleChange("imageURL")}
                        onBlur={handleBlur("imageURL")}
                        value={values.imageURL}
                    />
                    {errors.imageURL && (
                        <Text style={{ color: "red", fontSize: 10 }}>
                            {errors.imageURL}
                        </Text>
                    )}
                    <Button
                        onPress={handleSubmit}
                        title="Share"
                        disabled={!isValid}
                    />
                </>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({});
