import { View, Text } from 'react-native';
import {styles} from "./styles";
import ProgressCard from "../../components/HomeScreen/ProgressCard/ProgressCard";
import SummaryCard from "../../components/HomeScreen/SummaryCard/SummaryCard";
import LoyaltyCodeCard from "../../components/HomeScreen/LoyaltyCodeCard/LoyaltyCodeCard";
import WelcomeCard from "../../components/HomeScreen/WelcomeCard/WelcomeCard";

export default function HomeScreen(){
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <WelcomeCard />
                <LoyaltyCodeCard />
                <ProgressCard />
                <View style={styles.summary_cards_container}>
                    <SummaryCard header={'Active Schemes'} count={'5'} subText={'Tap to view all cards now'} />
                    <SummaryCard header={'Rewards Ready!'} count={'1'} subText={'Tap to redeem now'} />
                </View>
            </View>
        </View>
    );
}