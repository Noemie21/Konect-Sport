import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../../Screens/SearchStack/SearchScreen';
import {  Image } from "react-native";

const SearchStack = createNativeStackNavigator();

export default function SearchStackScreens() {
    return (
        <SearchStack.Navigator >
            <SearchStack.Screen name="Recherche" options={{
          headerTitleAlign: 'center',
          
          headerLeft: () => (
            <Image
              source={require('../../assets/header-image.png')}
              style={{ marginRight: "40%", marginBottom: "280%"
            }}
        
            />
            
            ),
        }} component={SearchScreen} />
        </SearchStack.Navigator>
    );
}