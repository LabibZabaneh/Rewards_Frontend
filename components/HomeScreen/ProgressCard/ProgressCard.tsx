import {Text, View} from "react-native";
import {styles} from "./styles";

export default function ProgressCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.main_text}>7 Pennies Cafe</Text>
            <Text style={styles.sub_text}>To get a free coffee</Text>
            <View style={styles.progress_bar_container}>
                <View style={styles.progress_bar_background}>
                    <View style={styles.progress_bar} />
                </View>
                <Text style={styles.progress_percentage_text}>7/10</Text>
            </View>
        </View>
    )

}