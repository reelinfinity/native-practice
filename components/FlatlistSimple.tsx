import React, { useRef } from "react";
import { View, FlatList, StyleSheet, Text, StatusBar } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Forth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Fifth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "Sixth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d76",
    title: "Seventh Item",
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FlatlistSimple = () => {
  const flatlistRef = useRef(null);
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatlistRef}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    height: "10%",
    backgroundColor: "black",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 4,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "white",
  },
});

export default FlatlistSimple;
