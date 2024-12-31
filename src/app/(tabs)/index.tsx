import { Text, View } from "react-native";
import "../globals.css";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

export default function MenuScreen() {
  return (
    <View>
      <Text className="font-wibletown text-2xl text-blue-400 ">
        This is the title of this page
      </Text>
      <ProductListItem product={products[5]} />
      <ProductListItem product={products[4]} />
    </View>
  );
}
