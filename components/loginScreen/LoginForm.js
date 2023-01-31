import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Formik } from "formik";
import * as Yup from "yup";
import { Validator } from "email-validator";

const LoginForm = () => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required("An email is required"),
        password: Yup.string()
            .required()
            .min(8, "Your password must have at least 8 characters."),
    });

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={LoginFormSchema}
                validateOnMount={true}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    isValid,
                }) => (
                    <>
                        <View
                            style={[
                                styles.inputField,
                                // {
                                //     borderColor:
                                //         values.email.length < 1 ||
                                //         Validator.validate(values.email)
                                //             ? "#ccc"
                                //             : "red",
                                // },
                            ]}>
                            <TextInput
                                placeholderTextColor="#444"
                                placeholder="Phone number, username or email"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                autoFocus={true}
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                value={values.email}
                            />
                        </View>
                        <View style={styles.inputField}>
                            <TextInput
                                placeholderTextColor="#444"
                                placeholder="Password"
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType="password"
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                            />
                        </View>
                        <View
                            style={{
                                alignItems: "flex-end",
                                marginBottom: 30,
                            }}>
                            <Text style={{ color: "#6bb0f5" }}>
                                Forgot password?
                            </Text>
                        </View>
                        {/* <Button title="Log in" /> */}
                        <Pressable
                            titleSize={20}
                            style={styles.button(isValid)}
                            onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Log in</Text>
                        </Pressable>
                        <View style={styles.signupContainer}>
                            <Text>Don't have an account? </Text>
                            <TouchableOpacity>
                                <Text style={{ color: "#6bb0f5" }}>
                                    Sign up
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },
    inputField: {
        borderRadius: 4,
        padding: 6,
        backgroundColor: "#fafafa",
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    button: (isValid) => ({
        backgroundColor: isValid ? "#0096f6" : "#9acaf7",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 42,
        borderRadius: 4,
    }),
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 15,
    },
    signupContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        marginTop: 50,
    },
});
