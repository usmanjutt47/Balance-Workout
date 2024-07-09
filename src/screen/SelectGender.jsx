import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { theme } from "../../constant/Theme";
import { useNavigation } from "@react-navigation/native";
import Buttons from "../components/Buttons";

const SelectGender = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState(null);

  const handlePress = useCallback((selectedGender) => {
    setGender(selectedGender);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/images/themeBg.png")}
        style={styles.imageBackground}
      >
        <Text style={styles.heading}>Tell Us About Yourself!</Text>
        <Text style={styles.description}>
          To give you a better experience we need
        </Text>
        <Text style={styles.description}>to know your gender</Text>

        <View style={styles.genderContainer}>
          <Pressable
            onPress={() => handlePress("male")}
            style={({ pressed }) => [
              styles.genderButton,
              {
                backgroundColor:
                  pressed || gender === "male" ? "#BDFE30" : "#91929F",
              },
            ]}
          >
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="male"
                size={32}
                color={gender === "male" ? "black" : "#fff"}
              />
              <Text
                style={[
                  styles.buttonText,
                  { color: gender === "male" ? "black" : "#fff" },
                ]}
              >
                Male
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => handlePress("female")}
            style={({ pressed }) => [
              styles.genderButton,
              {
                backgroundColor:
                  pressed || gender === "female" ? "#BDFE30" : "#91929F",
              },
            ]}
          >
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="female"
                size={32}
                color={gender === "female" ? "black" : "#fff"}
              />
              <Text
                style={[
                  styles.buttonText,
                  { color: gender === "female" ? "black" : "#fff" },
                ]}
              >
                Female
              </Text>
            </View>
          </Pressable>
        </View>
        <Buttons nextPath="SelectAge" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  heading: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    marginTop: "20%",
    fontWeight: "bold",
  },
  description: {
    color: "#D4D4D4",
    textAlign: "center",
    fontWeight: "regular",
  },
  genderContainer: {
    alignItems: "center",
    marginTop: "20%",
  },
  genderButton: {
    width: 140,
    height: 140,
    borderRadius: 99,
    justifyContent: "center",
    marginBottom: "20%",
  },
  iconContainer: {
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
  navButton: {
    height: 59,
    borderRadius: 40,
    width: "42%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SelectGender;
