import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { theme } from "../../constant/Theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Buttons from "../components/Buttons";

const SelectHeight = () => {
  const navigation = useNavigation();
  const heightData = useMemo(
    () => Array.from({ length: 220 }, (_, i) => `${i + 1}`),
    []
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/images/themeBg.png")}
        style={styles.bgImage}
      >
        <Text style={styles.heading}>What's Your Height?</Text>
        <Text style={styles.description}>
          This helps us create your personalized plan
        </Text>
        <View style={styles.pickerContainer}>
          <ScrollPicker
            dataSource={heightData}
            selectedIndex={2}
            renderItem={(data, index) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>
                  {data}
                  <Text style={styles.kgText}> cm</Text>
                </Text>
              </View>
            )}
            onValueChange={(data, selectedIndex) => {}}
            wrapperHeight={450}
            itemHeight={80}
            highlightColor="#BDFE30"
            highlightBorderWidth={5}
            wrapperBackground="transparent"
          />
        </View>

        <Buttons nextPath="SelectGoal" />
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
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
  },
  itemText: {
    fontSize: 48,
    color: "white",
    fontWeight: "bold",
  },
  kgText: {
    fontSize: 20,
    color: "white",
  },
  pickerContainer: {
    width: "50%",
    height: "50%",
    marginTop: "20%",
    alignItems: "center",
    alignSelf: "center",
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
  },
  navigationButtons: {
    width: "100%",
    height: 59,
    position: "absolute",
    bottom: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  navButton: {
    height: 59,
    borderRadius: 40,
    width: "42%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  navButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default SelectHeight;
