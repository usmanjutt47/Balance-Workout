import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function Challenges() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons
            name="arrow-back"
            size={24}
            color="#fff"
            style={styles.iconCenter}
          />
        </Pressable>
        <Text style={styles.headerText}>Challenges</Text>
      </View>
      <View style={styles.activeChallengeWrap}>
        <Text style={styles.activeChallengeText}>Active Challenge</Text>
      </View>
      <View style={styles.challengeCardsWrap}>
        <Pressable style={styles.challengeCard}>
          <Image
            source={require("../../assets/images/challenge.png")}
            style={styles.challengeImage}
          />
          <Text style={styles.challengeTitle}>Full Body Stretching</Text>
          <View style={styles.challengeDetails}>
            <MaterialIcons
              name="watch-later"
              size={15}
              color="#BDFE30"
              style={styles.iconMargin}
            />
            <Text style={styles.challengeDetailText}>4 Week</Text>
            <MaterialIcons
              name="local-fire-department"
              size={15}
              color="#BDFE30"
              style={styles.iconMargin}
            />
            <Text style={styles.challengeDetailText}>120 Kcal</Text>
          </View>
        </Pressable>
        <Pressable style={styles.challengeCard}>
          <Image
            source={require("../../assets/images/challenge2.png")}
            style={styles.challengeImage}
          />
          <Text style={styles.challengeTitle}>Squat Exercise</Text>
          <View style={styles.challengeDetails}>
            <MaterialIcons
              name="watch-later"
              size={15}
              color="#BDFE30"
              style={styles.iconMargin}
            />
            <Text style={styles.challengeDetailText}>4 Week</Text>
            <MaterialIcons
              name="local-fire-department"
              size={15}
              color="#BDFE30"
              style={styles.iconMargin}
            />
            <Text style={styles.challengeDetailText}>120 Kcal</Text>
          </View>
        </Pressable>
      </View>
      <View style={{ marginLeft: 20, marginTop: 30 }}>
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
          Challenges
        </Text>
      </View>
      <ScrollView
        style={{ marginHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={require("../../assets/images/card.png")}
          style={styles.imageBackground}
        >
          <View style={{ marginLeft: 23, marginTop: 63 }}>
            <Text style={{ color: "#BDFE30", fontSize: 12 }}>
              7x4 Challenge
            </Text>
            <Text style={{ color: "#fff", fontSize: 18, marginTop: 10 }}>
              Simply Chest Workout
            </Text>
            <Pressable
              style={styles.startNowButton}
              onPress={() => navigation.navigate("StartNow")}
            >
              <Text style={{ fontSize: 14, alignSelf: "center" }}>
                Start Now
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("../../assets/images/card.png")}
          style={styles.imageBackground}
        >
          <View style={{ marginLeft: 23, marginTop: 63 }}>
            <Text style={{ color: "#BDFE30", fontSize: 12 }}>
              7x4 Challenge
            </Text>
            <Text style={{ color: "#fff", fontSize: 18, marginTop: 10 }}>
              Simply Chest Workout
            </Text>
            <Pressable
              style={styles.startNowButton}
              onPress={() => navigation.navigate("StartNow")}
            >
              <Text style={{ fontSize: 14, alignSelf: "center" }}>
                Start Now
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("../../assets/images/card.png")}
          style={styles.imageBackground}
        >
          <View style={{ marginLeft: 23, marginTop: 63 }}>
            <Text style={{ color: "#BDFE30", fontSize: 12 }}>
              7x4 Challenge
            </Text>
            <Text style={{ color: "#fff", fontSize: 18, marginTop: 10 }}>
              Simply Chest Workout
            </Text>
            <Pressable
              style={styles.startNowButton}
              onPress={() => navigation.navigate("StartNow")}
            >
              <Text style={{ fontSize: 14, alignSelf: "center" }}>
                Start Now
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("../../assets/images/card.png")}
          style={styles.imageBackground}
        >
          <View style={{ marginLeft: 23, marginTop: 63 }}>
            <Text style={{ color: "#BDFE30", fontSize: 12 }}>
              7x4 Challenge
            </Text>
            <Text style={{ color: "#fff", fontSize: 18, marginTop: 10 }}>
              Simply Chest Workout
            </Text>
            <Pressable
              style={styles.startNowButton}
              onPress={() => navigation.navigate("StartNow")}
            >
              <Text style={{ fontSize: 14, alignSelf: "center" }}>
                Start Now
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center",
  },
  backButton: {
    height: 53,
    width: 53,
    backgroundColor: "rgba(30, 30, 30, 0.7)",
    borderRadius: 99,
    justifyContent: "center",
  },
  iconCenter: {
    alignSelf: "center",
  },
  headerText: {
    marginLeft: 10,
    fontWeight: "400",
    fontSize: 20,
    color: "#fff",
  },
  activeChallengeWrap: {
    marginLeft: 20,
    marginTop: 20,
  },
  activeChallengeText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
  challengeCardsWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 15,
  },
  challengeCard: {
    height: "auto",
    backgroundColor: "#1E1E1E",
    width: width * 0.45,
    borderRadius: 20,
    marginHorizontal: 3,
    paddingBottom: 20,
    position: "relative",
  },
  challengeImage: {
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  challengeTitle: {
    color: "#fff",
    marginTop: 5,
    fontWeight: "500",
    fontSize: 15,
    marginLeft: 10,
  },
  challengeDetails: {
    flexDirection: "row",
    position: "absolute",
    bottom: 5,
    left: 5,
  },
  iconMargin: {
    marginHorizontal: 3,
  },
  challengeDetailText: {
    color: "#8C8C8C",
    fontWeight: "400",
  },
  imageBackground: {
    marginTop: 10,
    height: 195,
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20,
  },
  startNowButton: {
    backgroundColor: "#BDFE30",
    width: 104,
    height: 35,
    justifyContent: "center",
    borderRadius: 40,
    marginTop: 15,
  },
});
