import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import Buttons from "../components/Buttons";

const SelectYourActivityLevel = () => {
  const weightData = useMemo(
    () => ["Rookie", "Beginner", "Intermediate", "Advance", "True Beast"],
    []
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/images/themeBg.png")}
        style={styles.bgImage}
      >
        <Text style={styles.heading}>
          Your regular physical activity level?
        </Text>
        <Text style={styles.description}>
          This helps us create your personalized plan
        </Text>
        <View style={styles.pickerContainer}>
          <ScrollPicker
            dataSource={weightData}
            selectedIndex={2}
            renderItem={(data, index) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{data}</Text>
              </View>
            )}
            onValueChange={(data, selectedIndex) => {}}
            wrapperHeight={430}
            itemHeight={80}
            highlightColor="#BDFE30"
            highlightBorderWidth={4}
            wrapperBackground="transparent"
          />
        </View>
        <Buttons nextPath="UploadPicture" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },
  heading: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    marginTop: "25%",
    fontWeight: "bold",
  },
  description: {
    color: "#D4D4D4",
    textAlign: "center",
    width: 280,
    alignSelf: "center",
    fontWeight: "regular",
    fontSize: 14,
  },
  pickerContainer: {
    width: "50%",
    height: "50%",
    marginTop: "15%",
    alignItems: "center",
    alignSelf: "center",
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 400,
  },
  itemText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
});

export default SelectYourActivityLevel;
