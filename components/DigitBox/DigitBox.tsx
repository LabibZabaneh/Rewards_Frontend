import {Text, View} from "react-native";
import React from "react";
import {styles} from "./styles";

type DigitBoxProps = {
    digit: string;
};

export default function DigitBox({ digit }: DigitBoxProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.digit}>{digit}</Text>
        </View>
    );
}