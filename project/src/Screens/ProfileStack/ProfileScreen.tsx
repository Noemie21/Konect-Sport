import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"


export default function ProfileScreen() {

    let navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
            
        </View>
      );
}