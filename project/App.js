import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBarNavigator from "./src/Router/TabBarNavigator";

const RootStack = createNativeStackNavigator();
export default function App() {
  return (
    
      <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }} >
                
                <RootStack.Group>
                <RootStack.Screen name="TabBar" component={TabBarNavigator} />
                </RootStack.Group>

                

            </RootStack.Navigator>
        </NavigationContainer>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
