import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable, Alert } from "react-native";
import products from "@assets/data/products";
import { defaultImage } from "@/src/components/ProductListItem";
import { useState } from "react";
import Button from "@components/Button";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    console.warn("Adding to cart, size: ", selectedSize);
  };

  if (!product) {
    return <Text>Product not found!</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product?.image || defaultImage }}
        style={styles.image}
      />

      <Text
        className="font-wibletown"
        style={{ color: "#f33300", fontSize: 27 }}
      >
        Select Size
      </Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
            }}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selectedSize === size ? "black" : "gray" },
              ]}
              className="font-wibletown"
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price} className="font-wibletown">
        ${product.price}
      </Text>
      <Button onPress={addToCart} text="Add to Cart" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 30,
    // fontWeight: "bold",
    marginTop: "auto",
    color: "#333",
  },
  sizes: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 22,
    color: "#333",
  },
});

export default ProductDetailsScreen;
