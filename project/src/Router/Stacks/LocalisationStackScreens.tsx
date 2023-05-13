import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LocalisationScreen from '../../Screens/LocalisationStack/LocalisationScreen';

const LocalisationStack = createNativeStackNavigator();

export default function LocalisationStackScreens() {
    return (
        <LocalisationStack.Navigator >
            <LocalisationStack.Screen name="Localisation" component={LocalisationScreen} />
        </LocalisationStack.Navigator>
    );
}