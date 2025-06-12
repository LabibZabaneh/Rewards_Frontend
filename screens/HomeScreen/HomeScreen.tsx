import { View, Text } from 'react-native';
import DigitBox from "../../components/DigitBox/DigitBox";
import {styles} from "./styles";
import SummaryCard from "../../components/SummaryCard/SummaryCard";

export default function HomeScreen(){
    return(
        <View style={{ flex: 1, margin: '5%' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>You have a free reward ready to redeem</Text>
            </View>
            <View style={styles.digitsContainer}>
                <DigitBox digit={'3'} />
                <DigitBox digit={'7'} />
                <DigitBox digit={'0'} />
                <DigitBox digit={'6'} />
                <DigitBox digit={'8'} />
            </View>
            <View style={{alignItems: 'center', backgroundColor: '#FF0000'}}>
                <Text style={{ fontSize: 16 }}>Show this code to the cafe to earn stamps</Text>
            </View>
            <View style={styles.summaryContainer}>
                <SummaryCard title={"Total Stamps"} count={"12"}/>
                <SummaryCard title={"Total Rewards"} count={"1"}/>
            </View>
        </View>
    );
}