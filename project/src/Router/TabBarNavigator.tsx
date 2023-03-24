import HomeStackScreens from "./Stacks/HomeStackScreens";
import SearchStackScreens from "./Stacks/SearchStackScreens";
import LocalisationStackScreens from "./Stacks/LocalisationStackScreens";
import MessageStackScreens from "./Stacks/MessageStackScreens";
import ProfileStackScreens from "./Stacks/ProfileStackScreens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image, View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabBarNavigator() {
    return (
        <Tab.Navigator
        
        screenOptions={{
            title: '',
            headerShown: false,
            tabBarLabelStyle: {
                fontWeight: "bold",
                
            },
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#A4A4A4",
      
                
            
            tabBarStyle: {
                bottom:50,
                left: 20,
                right:20,
                position: 'absolute',
                height:60,
                borderRadius: 30,
                backgroundColor: '#231599',
            }
        }}>
            <Tab.Screen name="home" component={HomeStackScreens} options={{tabBarIcon: ({focused }) => (
                <View style= {{alignItems: 'center', justifyContent: 'center', top: 20}}>
                    <Image 
                    source={require('../assets/icon-home.png')}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height:25,
                        tintColor: focused ? '#fff' : '#A4A4A4',
                    }}
                    
                    />
                    
                </View>
             ), }}/>
            <Tab.Screen name="Search" component={SearchStackScreens} options={{tabBarIcon: ({focused }) => (
                <View style= {{alignItems: 'center', justifyContent: 'center', top: 20}}>
                    <Image 
                    source={require('../assets/icon-search.png')}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height:25,
                        tintColor: focused ? '#fff' : '#A4A4A4',
                    }}
                    
                    />
                    
                </View>
             ), }}/>
            <Tab.Screen name="Localisation" component={LocalisationStackScreens} options={{tabBarIcon: ({focused }) => (
                <View style= {{alignItems: 'center', justifyContent: 'center', top: 20}}>
                    <Image 
                    source={require('../assets/icon-localisation.png')}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height:25,
                        tintColor: focused ? '#fff' : '#A4A4A4',
                    }}
                    
                    />
                    
                </View>
             ), }}/>
            <Tab.Screen name="Message" component={MessageStackScreens} options={{tabBarIcon: ({focused }) => (
                <View style= {{alignItems: 'center', justifyContent: 'center', top: 20}}>
                    <Image 
                    source={require('../assets/icon-message.png')}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height:25,
                        tintColor: focused ? '#fff' : '#A4A4A4',
                    }}
                    
                    />
                    
                </View>
             ), }}/>
            <Tab.Screen name="Profile" component={ProfileStackScreens} options={{tabBarIcon: ({focused }) => (
                <View style= {{alignItems: 'center', justifyContent: 'center', top: 20}}>
                    <Image 
                    source={require('../assets/icon-profile.png')}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height:25,
                        tintColor: focused ? '#fff' : '#A4A4A4',
                    }}
                    
                    />
                    
                </View>
             ), }}/>
        </Tab.Navigator>
    );
}