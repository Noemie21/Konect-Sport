import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"


export default function LocalisationScreen() {

    let navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Localisation Screen</Text>
            
        </View>
      );
}