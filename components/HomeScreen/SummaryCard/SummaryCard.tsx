import {Text, View} from "react-native";
import {styles} from "./styles";

type SummaryCardProps = {
    header: string,
    count: string,
    subText: string
}

export default function SummaryCard(props: SummaryCardProps){
    return (
        <View style={styles.container}>
            <Text style={styles.main_text}>{props.header}</Text>
            <Text style={styles.count}>{props.count}</Text>
            <Text style={styles.sub_text}>{props.subText}</Text>
        </View>
    )
}