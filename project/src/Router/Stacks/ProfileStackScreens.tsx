import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../Screens/ProfileStack/ProfileScreen';

const ProfileStack = createNativeStackNavigator();

export default function ProfileStackScreens() {
    return (
        <ProfileStack.Navigator >
            <ProfileStack.Screen name="Profile" component={ProfileScreen} />
        </ProfileStack.Navigator>
    );
}