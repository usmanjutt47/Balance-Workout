import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../constant/Theme";

const Buttons = ({ nextPath }) => {
  const navigation = useNavigation();
  const [isBackPressed, setIsBackPressed] = useState(false);
  const [isNextPressed, setIsNextPressed] = useState(false);

  const handleBackPressIn = useCallback(() => {
    setIsBackPressed(true);
    setIsNextPressed(false);
  }, []);

  const handleBackPressOut = useCallback(() => {
    setIsBackPressed(false);
    navigation.goBack();
  }, [navigation]);

  const handleNextPressIn = useCallback(() => {
    setIsNextPressed(true);
    setIsBackPressed(false);
  }, []);

  const handleNextPressOut = useCallback(() => {
    setIsNextPressed(false);
    navigation.navigate(nextPath);
  }, [navigation, nextPath]);

  return (
    <View style={styles.navButtonsContainer}>
      <View style={styles.buttonWrapper}>
        <Pressable
          onPressIn={handleBackPressIn}
          onPressOut={handleBackPressOut}
          style={({ pressed }) => [
            styles.navButton,
            {
              backgroundColor: isBackPressed ? "#BDFE30" : theme.colors.backBtn,
            },
          ]}
        >
          <MaterialIcons name="navigate-before" size={24} color="white" />
          <Text style={styles.navButtonText}>Back</Text>
        </Pressable>
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable
          onPressIn={handleNextPressIn}
          onPressOut={handleNextPressOut}
          style={({ pressed }) => [
            styles.navButton,
            {
              backgroundColor: isNextPressed ? "#BDFE30" : theme.colors.backBtn,
            },
          ]}
        >
          <Text style={[styles.navButtonText]}>Next</Text>
          <MaterialIcons name="navigate-next" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navButtonsContainer: {
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    width: "45%",
  },
  navButton: {
    flexDirection: "row",
    borderRadius: 50,
    width: "100%",
    height: 59,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    paddingTop: 5,
    textAlign: "center",
  },
  navButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default Buttons;
