import { FlatList, ScrollView, Text, View } from "react-native";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";
import { StatusBar } from "expo-status-bar";

export default function MenuScreen() {
  return (
    <View>
      <StatusBar style="dark" translucent={true} />
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => <ProductListItem product={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}
