import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-shadow-cards";
import axios from "axios";
import Loading from "./Loading";

const Student = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([{}]);

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get("https://8d7a-49-37-183-94.in.ngrok.io/api/admin/studentinfo")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
  };

  const Cards = () => {
    return (
      <ScrollView>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {data.map((obj) => (
              <Card style={[styles.card, { padding: 50, margin: 10 }]}>
                <Text>Name: {obj?.name}</Text>
                <Text>Dept: {obj?.dept}</Text>
                <Text>USN: {obj?.usn}</Text>
                <Text>Sem: {obj?.semester}</Text>
              </Card>
            ))}
          </>
        )}
      </ScrollView>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Students</Text>
      <Cards />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    marginVertical: 20,
    fontSize: 40,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Student;
