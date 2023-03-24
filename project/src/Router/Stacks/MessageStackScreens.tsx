import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageScreen from '../../Screens/MessageStack/MessageScreen';

const MessageStack = createNativeStackNavigator();

export default function MessageStackScreens() {
    return (
        <MessageStack.Navigator >
            <MessageStack.Screen name="Message" component={MessageScreen} />
        </MessageStack.Navigator>
    );
}