import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface ITextButton {
  labelOne: string;
  labelTwo: string;
  onPress: () => void;
  toggleValue: boolean;
}

export const TextButton: React.FC<ITextButton> = (props) => {
  return (
    <Pressable
      style={styles.showPasswordButton}
      onPress={() => {
        {
          props.onPress();
        }
      }}
    >
      {props.toggleValue ? (
        <Text>{props.labelOne}</Text>
      ) : (
        <Text>{props.labelTwo}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  showPasswordButton: {
    alignSelf: "center",
  },
});
