import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import RewardsScreen from "../../screens/RewardsScreen";
import LoyaltyCardsScreen from "../../screens/LoyaltyCardsScreen/LoyaltyCardsScreen";
import AccountScreen from "../../screens/AccountScreen";
import ExploreScreen from "../../screens/ExploreScreen";

const Bar = createBottomTabNavigator();

export default function BottomNavigationBar(){
    return (
        <Bar.Navigator
            initialRouteName={"Home"}
            screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: '#B8902A',
                    tabBarInactiveTintColor: '#888',
                    tabBarIcon: ({ color, size }) => {
                        let iconName: string = 'home';
                        switch (route.name) {
                            case 'Rewards':
                                iconName = 'gift-outline';
                                break;
                            case 'LoyaltyCards':
                                iconName = 'card-outline';
                                break;
                            case 'Home':
                                iconName = 'qr-code-outline';
                                break;
                            case 'Explore':
                                iconName = 'compass-outline';
                                break;
                            case 'Account':
                                iconName = 'person-outline';
                                break;
                        }

                        return <Ionicons name={iconName as any} size={size} color={color} />
                    },
                })}
        >
            <Bar.Screen name={"Rewards"} component={RewardsScreen} />
            <Bar.Screen name={"LoyaltyCards"} component={LoyaltyCardsScreen} />
            <Bar.Screen name={"Home"} component={HomeScreen} />
            <Bar.Screen name={"Explore"} component={ExploreScreen} />
            <Bar.Screen name={"Account"} component={AccountScreen} />

        </Bar.Navigator>
    );
}