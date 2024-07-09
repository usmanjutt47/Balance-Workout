import { MaterialIcons } from "@expo/vector-icons";
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
import { useNavigation } from "@react-navigation/native";
import Buttons from "../components/Buttons";

const SelectAge = () => {
  const navigation = useNavigation();
  const ageData = useMemo(
    () => Array.from({ length: 150 }, (_, i) => (i + 1).toString()),
    []
  );
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/images/themeBg.png")}
        style={styles.bgImage}
      >
        <Text style={styles.heading}>How Old Are You ?</Text>
        <Text style={styles.description}>
          This helps us create your personalized plan
        </Text>
        <View style={styles.pickerContainer}>
          <ScrollPicker
            dataSource={ageData}
            selectedIndex={2}
            renderItem={(data, index) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{data}</Text>
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
        <Buttons nextPath="SelectWeight" />
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
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
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
    fontWeight: "regular",
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

export default SelectAge;
