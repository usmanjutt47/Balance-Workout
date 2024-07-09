import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Challenges() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 20,
          marginTop: 30,
        }}
      >
        <Pressable
          style={{
            height: 53,
            width: 53,
            backgroundColor: "rgba(30, 30, 30, 0.7)",
            borderRadius: 99,
            justifyContent: "center",
          }}
        >
          <MaterialIcons
            name="arrow-back"
            size={24}
            color="#fff"
            style={{ alignSelf: "center" }}
          />
        </Pressable>
        <Text
          style={{
            alignSelf: "center",
            marginLeft: 10,
            fontWeight: "regular",
            fontSize: 20,
          }}
        >
          Challenges
        </Text>
      </View>
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Active Challenge
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          borderRadius: 3,
          paddingHorizontal: 20,
          height: "35%",
        }}
      >
        <Pressable
          style={{
            height: "100%",
            backgroundColor: "#1E1E1E",
            width: "50%",
            borderRadius: 20,
            marginHorizontal: 3,
          }}
        >
          <Image
            source={require("../../assets/images/challenge.png")}
            style={{
              width: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
          <Text
            style={{
              color: "#fff",
              marginTop: 5,
              fontWeight: "medium",
              fontSize: 15,
              marginLeft: 10,
            }}
          >
            Full Body stretching
          </Text>
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              bottom: 10,
              left: 10,
            }}
          >
            <MaterialIcons
              name="watch-later"
              size={15}
              color="#BDFE30"
              style={{ marginRight: 3 }}
            />
            <Text style={{ color: "#8C8C8C", fontWeight: "regular" }}>
              4 Week
            </Text>
            <MaterialIcons
              name="local-fire-department"
              size={15}
              color="#BDFE30"
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <Text style={{ color: "#8C8C8C", fontWeight: "regular" }}>
              120 Kcal
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            height: 153,
            backgroundColor: "black",
            width: "50%",
            marginHorizontal: 3,
            borderRadius: 20,
          }}
        >
          <Image
            source={require("../../assets/images/challenge2.png")}
            style={{
              width: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
          <Text
            style={{
              color: "#fff",
              marginTop: 5,
              fontWeight: "medium",
              fontSize: 15,
              marginLeft: 10,
            }}
          >
            Squat Exercise
          </Text>
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              bottom: 10,
              left: 10,
            }}
          >
            <MaterialIcons
              name="watch-later"
              size={15}
              color="#BDFE30"
              style={{ marginRight: 3 }}
            />
            <Text style={{ color: "#8C8C8C", fontWeight: "regular" }}>
              4 Week
            </Text>
            <MaterialIcons
              name="local-fire-department"
              size={15}
              color="#BDFE30"
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <Text style={{ color: "#8C8C8C", fontWeight: "regular" }}>
              120 Kcal
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
