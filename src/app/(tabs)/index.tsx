import { ScrollView, Text, View } from "react-native";
import "../globals.css";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";

export default function MenuScreen() {
  return (
    <ScrollView>
      <View>
        <Text className="font-wibletown text-2xl text-blue-800 ">
          This is the title of this page
        </Text>
        <ProductListItem product={products[9]} />
        <ProductListItem product={products[4]} />
      </View>
    </ScrollView>
  );
}
