import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Login = () => {
  const navigation = useNavigation();
  const [isRemembered, setIsRemembered] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const toggleRemember = () => {
    setIsRemembered(!isRemembered);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/login.png")}
        style={styles.backgroundImage}
      />
      <StatusBar style="auto" />
      <View style={styles.scrollContainer}>
        <Image
          source={require("../../assets/icon/app-logo.png")}
          style={styles.appIcon}
        />
        <Text style={styles.loginHeading1}>Welcome to</Text>
        <Text style={styles.loginHeading2}>Balanced Workout</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <AntDesign
              name="user"
              size={24}
              color={emailFocused ? "#fff" : "#91929F"}
              style={styles.icon}
            />
            <TextInput
              style={[styles.textInput, emailFocused && styles.inputFocused]}
              placeholder="helloBalanced@gmail.com"
              placeholderTextColor="#91929F"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <AntDesign
              name="lock"
              size={24}
              color={passwordFocused ? "#fff" : "#91929F"}
              style={styles.icon}
            />
            <TextInput
              style={[styles.textInput, passwordFocused && styles.inputFocused]}
              placeholder="Enter Password"
              placeholderTextColor="#91929F"
              secureTextEntry={true}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <View style={styles.rememberMeContainer}>
            <Pressable
              onPress={toggleRemember}
              style={[styles.circle, isRemembered && styles.circleClicked]}
            >
              {isRemembered && <Text style={styles.tick}>✓</Text>}
            </Pressable>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>
          <Pressable>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </Pressable>
        </View>

        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>

        <View style={styles.loginOption}>
          <View style={styles.line} />
          <Text style={styles.textLoginOption}>or login with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialButtonsContainer}>
          <Pressable style={styles.socialButton}>
            <Image
              source={require("../../assets/icon/apple.png")}
              style={{ height: 25, width: 25 }}
            />
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Image
              source={require("../../assets/icon/google.png")}
              style={{ height: 20, width: 20 }}
            />
          </Pressable>
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  scrollContainer: {
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  appIcon: {
    marginBottom: 20,
    marginTop: "20%",
  },
  loginHeading1: {
    fontSize: 25,
    color: "#fff",
  },
  loginHeading2: {
    fontSize: 30,
    color: "#BDFE30",
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    marginTop: 20,
  },
  label: {
    color: "#fff",
    marginBottom: 10,
  },
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    paddingLeft: 10,
  },
  textInput: {
    height: 50,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 40,
    color: "#fff",
  },
  inputFocused: {
    borderColor: "#BDFE30",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#303030",
    justifyContent: "center",
    alignItems: "center",
  },
  circleClicked: {},
  tick: {
    fontSize: 18,
    color: "#fff",
  },
  rememberMeText: {
    color: "#91929F",
    marginLeft: 10,
  },
  forgotPasswordText: {
    color: "#BDFE30",
  },
  loginButton: {
    alignItems: "center",
    backgroundColor: "#BDFE30",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 30,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  loginOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  textLoginOption: {
    fontSize: 16,
    color: "#fff",
    marginHorizontal: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#91929F",
  },
  socialLoginContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  socialIcon: {
    width: 51,
    height: 51,
  },
  signupContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  signupText: {
    color: "#fff",
    fontSize: 16,
  },
  signupLink: {
    color: "#BDFE30",
    fontSize: 16,
    marginLeft: 5,
  },

  appleButton: {
    marginHorizontal: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  socialButton: {
    marginHorizontal: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
});

export default Login;
