import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import products from "@assets/data/products";
import { defaultImage } from "@/src/components/ProductListItem";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id.toString() === id);

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
      <Text style={styles.price} className="font-wibletown">
        ${product.price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 35,
    // fontWeight: "bold",
    color: "#333",
  },
});

export default ProductDetailsScreen;
