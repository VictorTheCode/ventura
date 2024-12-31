import { Image, StyleSheet, View, Text } from "react-native";
import Colors from "@/src/constants/Colors";

const ProductListItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image
        className="w-[400px] h-[400px] object-contain"
        source={product.image}
        style={styles.image}
      />
      <Text className="font-wibletown text-2xl">{product.name}</Text>
      <Text className="font-wibletown text-2xl" style={styles.price}>
        ${product.price}
      </Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    color: Colors.light.tint,
    margin: 10,
  },
});
