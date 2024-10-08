import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const MenuScreen = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <ScrollView style={styles.container}>
      <Image source={require("./assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Christoffel's culinary MENU</Text>

      {/* Starter Section */}
      <View style={styles.menuItem}>
        <Image
          source={require("./assets/Grilled meat and vegetables.jpg")}
          style={styles.menuImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.menuTitle}>Starter</Text>
          <Text style={styles.price}>Average price: R225</Text>
          <Text style={styles.description}>
            Begin your culinary journey with our delightful and appetizing
            starter dishes.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={() => navigation.navigate("StarterUpdate")} // Navigate to StarterUpdate
        >
          <Icon name="arrow-right" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Main Section */}
      <View style={styles.menuItem}>
        <Image
          source={require("./assets/meat with baked potatoes.jpg")}
          style={styles.menuImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.menuTitle}>Main</Text>
          <Text style={styles.price}>Average price: R350</Text>
          <Text style={styles.description}>
            Indulge in our expertly crafted main courses that are sure to
            satisfy your hunger.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={() => navigation.navigate("MainUpdate")} // Navigate to MainUpdate
        >
          <Icon name="arrow-right" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Dessert Section */}
      <View style={styles.menuItem}>
        <Image
          source={require("./assets/cake with cracker.jpg")}
          style={styles.menuImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.menuTitle}>Dessert</Text>
          <Text style={styles.price}>Average price: R205</Text>
          <Text style={styles.description}>
            End your meal on a sweet note with our delectable dessert
            selections.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={() => navigation.navigate("DessertUpdate")} // Navigate to DessertUpdate
        >
          <Icon name="arrow-right" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  logo: {
    marginLeft: 130,
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingTop: 50,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow for iOS
    shadowOpacity: 0.8, // Shadow for iOS
    shadowRadius: 2, // Shadow for iOS
  },
  menuImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f5a623",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#777",
  },
  arrowContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f5a623",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default MenuScreen;
