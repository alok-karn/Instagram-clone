import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Pressable,
    Alert,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

import { firebaseAuth } from "../../firebase";
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
} from "firebase/auth";

const SignupForm = ({ navigation }) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required("An email is required"),
        username: Yup.string().required().min(2, "A username is required"),
        password: Yup.string()
            .required()
            .min(8, "Your password has to have at least 8 characters"),
    });

    const onSignup = async (email, username, password) => {
        try {
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
            console.log("Signed up successfully!");
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: "", username: "", password: "" }}
                onSubmit={(values) =>
                    onSignup(values.email, values.username, values.password)
                }
                validationSchema={SignupFormSchema}
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
                                {
                                    borderColor:
                                        values.email.length < 1 ||
                                        Validator.validate(values.email)
                                            ? "#ccc"
                                            : "red",
                                },
                            ]}>
                            <TextInput
                                placeholderTextColor="#444"
                                placeholder="Email"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                autoFocus={true}
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                value={values.email}
                            />
                        </View>
                        <View
                            style={[
                                styles.inputField,
                                {
                                    borderColor:
                                        1 > values.username.length ||
                                        values.username.length >= 2
                                            ? "#ccc"
                                            : "red",
                                },
                            ]}>
                            <TextInput
                                placeholderTextColor="#444"
                                placeholder="Username"
                                autoCapitalize="none"
                                textContentType="username"
                                onChangeText={handleChange("username")}
                                onBlur={handleBlur("username")}
                                value={values.username}
                            />
                        </View>
                        <View
                            style={[
                                styles.inputField,
                                {
                                    borderColor:
                                        1 > values.password.length ||
                                        values.password.length >= 8
                                            ? "#ccc"
                                            : "red",
                                },
                            ]}>
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
                        <Pressable
                            titleSize={20}
                            style={styles.button(isValid)}
                            onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>
                        <View style={styles.loginContainer}>
                            <Text>Already have an account? </Text>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}>
                                <Text style={{ color: "#6bb0f5" }}>Log in</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    );
};

export default SignupForm;

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
    loginContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        marginTop: 50,
    },
    button: (isValid) => ({
        backgroundColor: isValid ? "#6bb0f5" : "#9acaf7",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 42,
        borderRadius: 4,
        marginTop: 50,
    }),
    buttonText: {
        fontWeight: "600",
        color: "white",
        fontSize: 15,
    },
});
