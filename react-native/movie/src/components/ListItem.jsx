import * as React from "react";

import { View, Image, StyleSheet } from "react-native";
import { Paragraph, TouchableRipple } from "react-native-paper";

export function ListItem({ item, onPress }) {
  return (
    <TouchableRipple onPress={() => onPress(item)} accessibilityRole="button">
      <View style={styles.item}>
        <View style={styles.firstRow}>
          <Paragraph style={styles.title}>{item.Title}</Paragraph>
        </View>
        <View style={styles.secondRow}>
          <Paragraph>{item.Year}</Paragraph>
        </View>
        <View style={styles.secondRow}>
          <Image style={styles.poster} source={{ uri: item.Poster }} />
        </View>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 10,
  },
  firstRow: {
    marginTop: 5,
    marginBottom: 5,
  },
  secondRow: {
    marginBottom: 10,
  },
  title: { fontWeight: "bold" },
  poster: { width: "100%", height: undefined, aspectRatio: 1 },
});
