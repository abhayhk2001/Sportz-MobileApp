import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-shadow-cards";
import axios from "axios";
import Loading from "./Loading";

const Event = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([{}]);

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get("https://8d7a-49-37-183-94.in.ngrok.io/api/admin/matchesinfo")
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
                <Text>Held In:{obj?.held_in}</Text>
                <Text>Participant 1: {obj?.participant_ind_1}</Text>
                <Text>Participant 2: {obj?.participant_ind_2}</Text>
                <Text>Match Report: {obj?.match_report}</Text>
                <Text>Won By: {obj?.won}</Text>
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
      <Text style={styles.heading}>Events</Text>
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
export default Event;
