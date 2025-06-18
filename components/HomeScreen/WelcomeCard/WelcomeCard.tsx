import {Text, View} from "react-native";
import {styles} from "./styles";

export default function WelcomeCard(){
    return (
        <View style={styles.header_container}>
            <View style={styles.header_card}>
                <Text style={styles.header_text}>Good afternoon, Labib!</Text>
            </View>
        </View>
    )
}