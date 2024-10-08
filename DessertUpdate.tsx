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
const DessertUpdate = ({ navigation }) => {
  const dessertMenuItems = [
    {
      id: 1,
      name: "Cake with Cracker",
      price: "R50",
      image: require("./assets/Sweet delight.jpg"),
    },
    {
      id: 2,
      name: "Soufflé Cake with Chocolate",
      price: "R70",
      image: require("./assets/souffle cake with chocolate.jpg"),
    },
    {
      id: 3,
      name: "Chocolate Cheesecake",
      price: "R60",
      image: require("./assets/chocolate cheesecake.jpg"),
    },
    {
      id: 4,
      name: "Chocolate Syrup Cake",
      price: "R50",
      image: require("./assets/chocolate syrup.jpg"),
    },
    {
      id: 5,
      name: "Brownie with Cream",
      price: "R65",
      image: require("./assets/Brownie with cream.jpg"),
    },
    {
      id: 6,
      name: "Raspberry and Chocolate",
      price: "R68",
      image: require("./assets/raspberry and chocolate.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.png")} style={styles.logo} />
      <ScrollView>
        <Text style={styles.title}>Update Dessert Menu</Text>

        {/* Display the number of available items */}
        <Text style={styles.countText}>
          Available items: {dessertMenuItems.length}
        </Text>

        <View style={styles.grid}>
          {dessertMenuItems.map((item) => (
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

export default DessertUpdate;
