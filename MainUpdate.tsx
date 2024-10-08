import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// navigation prop to allow navigation between screens
const MainUpdate = ({ navigation }) => {
  const mainMenuItems = [
    {
      id: 1,
      name: "Lobster Gourmet",
      price: "R300",
      image: require("./assets/lobster gourmet.jpg"),
    },
    {
      id: 2,
      name: "Grilled Chicken Steak",
      price: "R100",
      image: require("./assets/Grilled chicken steak.jpg"),
    },
    {
      id: 3,
      name: "Pizza with Sausage",
      price: "R130",
      image: require("./assets/pizza with sausage.jpg"),
    },
    {
      id: 4,
      name: "Steak and Chips",
      price: "R150",
      image: require("./assets/Stake and chips.jpg"),
    },
    {
      id: 5,
      name: "Cheese Burger",
      price: "R90",
      image: require("./assets/Cheese burger.jpg"),
    },
    {
      id: 6,
      name: "Chicken Wings with Fries",
      price: "R150",
      image: require("./assets/chicken wings with fries.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.png")} style={styles.logo} />
      <ScrollView>
        <Text style={styles.title}>Update Main Menu</Text>

        {/* Display the number of available items */}
        <Text style={styles.countText}>
          Available items: {mainMenuItems.length}
        </Text>

        <View style={styles.grid}>
          {mainMenuItems.map((item) => (
            <View key={item.id} style={styles.menuItem}>
              <Image source={item.image} style={styles.menuImage} />
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() =>
                  navigation.navigate("UpdateItem", {
                    dishName: item.name,
                    dishPrice: item.price,
                    dishImage: item.image,
                  })
                }
              >
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  countText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  menuItem: {
    width: "48%",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    padding: 10,
  },
  menuImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    resizeMode: "cover",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  editButton: {
    backgroundColor: "#f5a623",
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
  },
  editText: {
    color: "#fff",
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "#f5a623",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  backText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  logo: {
    marginLeft: 130,
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
});

export default MainUpdate;
