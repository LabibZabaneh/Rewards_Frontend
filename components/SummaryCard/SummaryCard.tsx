import { View, Text } from "react-native";
import {styles} from "./styles";

type SummaryCardProps = {
    title: string,
    count: string
}

export default function SummaryCard({title, count}: SummaryCardProps) {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.count}>{count}</Text>
      </View>
    );
}