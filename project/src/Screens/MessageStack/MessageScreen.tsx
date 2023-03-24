import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"


export default function MessageScreen() {

    let navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Message Screen</Text>
            
        </View>
      );
}