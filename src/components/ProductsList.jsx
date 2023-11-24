import React from "react";
import { FlatList, StyleSheet, View, StatusBar } from "react-native";
import { products } from "../JSON/Productos.json";
import { ProductsItem } from "./ProductsItem";

export const ProductsList = ({ navigation }) => {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={{ padding: 3 }}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <ProductsItem item={item} navigation={navigation} />
          )}
        />
      </View>
    </>
  );
};
