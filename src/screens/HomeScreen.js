import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function HomeScreen({navigation}) {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <Button title="ekle" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => {navigation.navigate('Show',{id :item.id})}} >
              <View style={styles.row}>
                <Text style={{ fontSize: 18 }}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    padding: 10,
  },
});
