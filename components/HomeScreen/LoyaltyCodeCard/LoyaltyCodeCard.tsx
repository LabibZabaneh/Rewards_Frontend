import {Text, View} from "react-native";
import DigitBox from "../DigitBox/DigitBox";
import {styles} from "./styles";

export default function LoyaltyCodeCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Personal Loyalty Code</Text>
            <View style={styles.digits_container}>
                <DigitBox digit={'3'} />
                <DigitBox digit={'7'} />
                <DigitBox digit={'0'} />
                <DigitBox digit={'6'} />
                <DigitBox digit={'8'} />
            </View>
            <Text style={styles.sub_text}>Show this code to the cafe to earn stamps</Text>
        </View>
    )
}