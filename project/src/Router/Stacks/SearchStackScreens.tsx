import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../../Screens/SearchStack/SearchScreen';

const SearchStack = createNativeStackNavigator();

export default function SearchStackScreens() {
    return (
        <SearchStack.Navigator >
            <SearchStack.Screen name="Search" component={SearchScreen} />
        </SearchStack.Navigator>
    );
}