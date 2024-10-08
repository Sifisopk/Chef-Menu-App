import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

const UpdateItem = ({ route, navigation }) => {
  const { dishName, dishPrice, dishImage } = route.params;
  const [name, setName] = useState(dishName);
  const [price, setPrice] = useState(dishPrice);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(dishImage);

  const handleSave = () => {
    console.log("Updated dish:", { name, price, description, image });
    // Navigate back or save the updated information
    navigation.goBack();
  };

  // Function to pick an image from the device
  const pickImage = () => {
    // Open image picker
    launchImageLibrary(
      {
        mediaType: "photo",
        includeBase64: false,
        quality: 1,
      },
      (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          Alert.alert("Error", "ImagePicker Error: " + response.error);
        } else if (response.assets && response.assets.length > 0) {
          setImage({ uri: response.assets[0].uri });
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Update {dishName}</Text>

      {/* Display image */}
      {image ? (
        <Image source={image} style={styles.image} />
      ) : (
        <Text>No image selected</Text>
      )}

      {/* Button to choose a new image */}
      <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
        <Text style={styles.imageButtonText}>Change Image</Text>
      </TouchableOpacity>

      {/* Inputs for dish details */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Dish Name"
      />

      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Dish Price"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        multiline
      />

      {/* Button container for styling */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  imageButton: {
    backgroundColor: "#f5a623",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  imageButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    backgroundColor: "#f5a623",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 5, // Space between buttons
  },
  backButton: {
    backgroundColor: "#000", // Different color for the back button
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  logo: {
    marginLeft: 130,
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 5,
  },
});

export default UpdateItem;
