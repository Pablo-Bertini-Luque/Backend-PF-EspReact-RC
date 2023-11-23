import React from "react";
import { Image, StyleSheet, View, Text, Button } from "react-native";

export const ProductsItem = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: `${item.thumbnail}`,
          }}
          style={styles.imageProduct}
        />
      </View>
      <View
        style={{
          flex: 4,
        }}
      >
        <Text style={{ padding: 5, fontSize: 17, fontWeight: "bold", flex: 3 }}>
          {item.location}
        </Text>
        <Text style={{ padding: 5, fontSize: 17, fontWeight: "bold", flex: 1 }}>
          {item.hour}
        </Text>
        <Text style={{ padding: 5, fontSize: 15, flex: 1 }}>
          {item.category}
        </Text>
        <Text style={{ padding: 5, fontSize: 15, flex: 1 }}>
          {item.playingPosition}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-end",
          padding: 5,
        }}
      >
        <Button
          title="Ver mas"
          onPress={() => navigation.navigate("InfoTurn", { idTurn: item.id })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "black",
    borderWidth: 2,
    margin: 8,
    padding: 3,
    borderRadius: 10,
  },

  imageProduct: {
    flex: 1,
    height: 190,
    borderWidth: 2,
  },
});