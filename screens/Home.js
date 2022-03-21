import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View, Text, Button } from "react-native";
import axios from "axios";

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={[styles.itemHeading, { marginTop: -10 }]}>
        {item.heading}
      </Text>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

const Home = ({ navigation }) => {
  const [count, setCount] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get("https://8d7a-49-37-183-94.in.ngrok.io/api/faculty/countinfo")
      .then((response) => {
        console.log(response.data);
        setCount(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const data = [
    {
      key: "3",
      text: count?.students,
      heading: "Students",
    },
    {
      key: "2",
      text: count?.events,
      heading: "Events",
    },
    {
      key: "1",
      text: count?.matches,
      heading: "Matches",
    },
    {
      key: "4",
      text: count?.sports,
      heading: "Sports",
    },
  ];
  return (
    <View>
      <Text style={styles.heading}>General Info</Text>
      <View style={styles.cardContainer}>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => <ListItem item={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text style={styles.heading}>For More Details</Text>
      <View
        style={[
          styles.container,
          {
            flexDirection: "column",
          },
        ]}
      >
        <View style={[styles.buttonContainer]}>
          <Button
            title="Events"
            onPress={() =>
              navigation.push("Event", { name: "React Native School" })
            }
          />
        </View>
        <View style={[styles.buttonContainer]}>
          <Button
            title="Students"
            onPress={() =>
              navigation.push("Student", { name: "React Native School" })
            }
          />
        </View>
        <View style={[styles.buttonContainer]}>
          <Button
            title="Sport Events"
            onPress={() =>
              navigation.push("Sport Events", { name: "React Native School" })
            }
          />
        </View>
        <View style={[styles.buttonContainer]}>
          <Button
            title="Matches"
            onPress={() =>
              navigation.push("Match", { name: "React Native School" })
            }
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    height: 150,
    marginBottom: 60,
    marginTop: 30,
    backgroundColor: "#8fd4ff",
  },
  heading: {
    marginVertical: 10,
    fontSize: 30,
  },
  item: {
    width: 250,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: { color: "black", marginTop: 5 },
  itemHeading: {
    fontWeight: "800",
    fontSize: 18,
    color: "black",
    marginTop: 20,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    borderRadius: 30,
    // backgroundColor: "#00BFFF",
  },
});
export default Home;
