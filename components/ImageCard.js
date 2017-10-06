// React
import React, { Component } from "react";
import { View, Linking } from "react-native";
// Styles
import styles from "./styles";
// Toolkit
import { Tile } from "react-native-elements";

const ImageCard = response => {
  const {
    description,
    origin,
    link: { canonical },
    media: { image: { thumbnail } }
  } = response;

  const handleClick = link => {
    console.log("link ", link);

    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      } else {
        console.log("Don't know how to open URI: " + link);
      }

      return false;
    });
  };

  return (
    <Tile
      imageSrc={{ uri: thumbnail }}
      title={description}
      featured
      caption={origin}
      onPress={() => handleClick(canonical)}
    />
  );
};

export default ImageCard;
