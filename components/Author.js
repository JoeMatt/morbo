import React from "react";
import { View } from "react-native";
// Styles
import styles from "./styles";
// Toolkit
import { Text, Avatar, Badge, Tile } from "react-native-elements";

const Author = author => {
  console.log("Author loaded ", author);

  const hasComma = author.name.indexOf(",") !== -1;
  const [fullName, newspaper = ""] = author.name.split(",");
  let name = hasComma ? fullName : author.name;
  let initials = name
    .split(" ")
    .map(n => n[0])
    .join(".");

  console.log("initials ", initials, newspaper);

  return (
    <View style={styles.row}>
      <Avatar
        small
        rounded
        title={initials}
        onPress={() => console.log("Go to author page", author.path)}
        activeOpacity={0.7}
      />
      <Text style={{ padding: 10 }}>
        {name}
        {newspaper && `, ${newspaper}`}
      </Text>
    </View>
  );
};

export default Author;
