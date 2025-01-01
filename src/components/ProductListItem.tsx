import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "@/src/constants/Colors";
import { Product } from "@/assets/types";
import { Link } from "expo-router";

export const defaultImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`./menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text className="font-wibletown text-2xl">{product.name}</Text>
        <Text className="font-wibletown text-2xl" style={styles.price}>
          ${product.price}
        </Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
    // margin: 10,
    alignItems: "center",
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
