import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  color?: "blue" | "green";
  text: string;
  onPress: () => void;
  disabled: boolean;
}

const ButtonCalculate = ({ color, text, onPress, disabled }: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        color === "green" ? styles.light : null,
        color === "blue" ? styles.dark : null,
        disabled ? styles.disabled : null,
      ]}
    ></TouchableOpacity>
  );
};

export default ButtonCalculate;

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginLeft: 50,
    justifyContent: "center",
    borderColor: "#0275d8",
    backgroundColor: "#0275d8",
  },
  light: {
    backgroundColor : 'green'
  },
  dark: {
    backgroundColor: 'green'
  },
  disabled: {
    backgroundColor: 'black'
  }
});
