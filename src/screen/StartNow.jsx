import { View, Text, Image, StyleSheet, Modal, Pressable } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function StartNow({ visible, onClose }) {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <Image
          source={require("../../assets/images/startNow.png")}
          style={{ position: "relative" }}
        />
      </View>
      <Modal
        transparent={true}
        visible={visible}
        animationType="slide"
        onRequestClose={onClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Pressable
              style={{
                height: 53,
                width: 53,
                backgroundColor: "#1E1E1E",
                borderRadius: 30,
                justifyContent: "center",
              }}
            >
              <FontAwesome5
                name="running"
                size={24}
                color="#fff"
                style={{ alignSelf: "center" }}
              />
            </Pressable>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 32 }}>
                7x4 Challenge
              </Text>
            </View>
            <View>
              <Text style={{ fontWeight: "regular", textAlign: "center" }}>
                Lorem ipsum is a placeholder text commonly used to
              </Text>
              <Text style={{ fontWeight: "regular", textAlign: "center" }}>
                demonstrate the visual form of a document or a typeface.
              </Text>
            </View>
            <Pressable
              onPress={() => navigation.navigate("ActiveWorkout")}
              style={{
                position: "absolute",
                backgroundColor: "#fff",
                height: 50,
                justifyContent: "center",
                borderRadius: 74,
                width: "70%",
                position: "absolute",
                bottom: 0,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Start Now
              </Text>
            </Pressable>
          </View>
          
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "92%",
    backgroundColor: "#BDFE30",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    height: "28%",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#BDFE30",
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
});
