import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from "@expo-google-fonts/lato";

export default function SearchScreen() {
  const [shouldShow, setShouldShow] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const [input, setInput] = useState("");

  let navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerShadowVisible: false,
    });
  }, [navigation]);

  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <View>
            <View style={styles.sectionStyle}>
              <Image
                source={require("../../assets/search.png")}
                style={styles.imageStyle}
              />

              <TextInput
                style={styles.input}
                onChangeText={(text) => setInput(text)}
                value={input}
                placeholder="Recherche une salle"
                placeholderTextColor="#fff"
              />
            </View>
          </View>
          <View style={{ marginLeft: 30 }}>
            <Text style={styles.title}>Lieux populaires !</Text>
            <Text style={styles.text}>Paris XIV Futsal Club</Text>
            <Text style={styles.text}>Squash Montmartre</Text>
            <Text style={styles.text}>Anybuddy</Text>
            <Text style={styles.text}>ASPTT Paris</Text>
          </View>
          <View>
            <Text style={styles.secondTitle}>Les Sports</Text>
          </View>

          <ScrollView>
            <View style={styles.sportContainer}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/basketball.png")}
                  style={styles.imageButton}
                />
                    <TouchableOpacity  onPress={() => Alert.alert("pressed button")}>
      <Text style={styles.buttonText}>BASKETBALL</Text>
    </TouchableOpacity>
                
              </View>
            </View>

            <View style={styles.sportContainer}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/football.png")}
                  style={styles.imageButton}
                />
                 <TouchableOpacity  onPress={() => setShouldShow(!shouldShow)}>
      <Text style={styles.buttonText}>FOOTBALLS</Text>
    </TouchableOpacity>
           
              </View>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                3 SPORTS
              </Text>
            </View>

            {shouldShow ? (
              <>
                <View style={styles.sportContainer2}>
                <TouchableOpacity  onPress={() => Alert.alert("pressed button")}>
      <Text style={styles.buttonText2}>FOOTBALL</Text>
    </TouchableOpacity>
               
                </View>
                <View style={styles.sportContainer2}>
                <TouchableOpacity  onPress={() => Alert.alert("pressed button")}>
      <Text style={styles.buttonText2}>FUTSAL</Text>
    </TouchableOpacity>
    
                </View>
                <View style={styles.sportContainer2}>
                <TouchableOpacity  onPress={() => Alert.alert("pressed button")}>
      <Text style={styles.buttonText2}>FIVE</Text>
    </TouchableOpacity>
         
                </View>
              </>
            ) : null}

            <View style={styles.sportContainer}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/tennisball.png")}
                  style={styles.imageButton}
                />
                <TouchableOpacity  onPress={() => setShouldRender(!shouldRender)}>
      <Text style={styles.buttonText}>RACKET GAMES</Text>
    </TouchableOpacity>

                
              </View>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                3 SPORTS
              </Text>
            </View>

            {shouldRender ? (
              <>
                <View style={styles.sportContainer2}>
                <TouchableOpacity  onPress={() => Alert.alert("pressed button")}>
      <Text style={styles.buttonText2}>SQUASH</Text>
    </TouchableOpacity>
                  
                </View>
                <View style={styles.sportContainer2}>
                <TouchableOpacity  onPress={() => Alert.alert("pressed button")}>
      <Text style={styles.buttonText2}>TENNIS</Text>
    </TouchableOpacity>
                  
                </View>
                <View style={styles.sportContainer2}>
                <TouchableOpacity  onPress={() => Alert.alert("pressed button")}>
      <Text style={styles.buttonText2}>PADEL</Text>
    </TouchableOpacity>
             
                </View>
              </>
            ) : null}

            <View style={styles.sportContainer}>
            <TouchableOpacity  onPress={() => Alert.alert("pressed button")}>
      <Text style={styles.buttonText}>HANDBALL</Text>
    </TouchableOpacity>
                
              
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,

    fontFamily: "Lato_400Regular",
  },
  title: {
    color: "#8C81F7",
    paddingBottom: 5,
    paddingTop: 5,
    fontFamily: "Lato_900Black",
  },
  text: {
    paddingBottom: 5,
    fontFamily: "Lato_400Regular",
  },
  secondTitle: {
    color: "#8C81F7",
    marginTop: 5,
    marginLeft: 30,
    fontFamily: "Lato_900Black",
  },
  tinyLogo: {
    width: 25,
    height: 25,
  },
  imageStyle: {
    padding: 7,
    margin: 15,
    height: 3,
    width: 3,
    resizeMode: "contain",
    alignItems: "center",
  },

  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 0.5,

    height: 50,

    margin: 20,

    borderRadius: 15,
    backgroundColor: "#101546",
  },
  imageStyle2: {
    padding: 7,
    margin: 15,
    height: 3,
    width: 3,
    resizeMode: "contain",
    alignItems: "center",
    backgroundColor: "blue",
  },
  sportContainer: {
    backgroundColor: "#8C81F7",
    borderRadius: 10,
    marginBottom: 20,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  sportContainer2: {
    backgroundColor: "#8C81F7",
    borderRadius: 10,
    marginBottom: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: "center",

    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },

  imageButton: {
    width: 30,
    height: 30,
  },
//   button: {
//     backgroundColor: '#fff',
//     padding: 40,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  buttonText: {
    fontWeight: 'bold',
    color:"#fff" ,
    fontFamily: "Lato_700Bold",
    fontSize: 25,
    marginLeft: 10
  
    
  },
  buttonText2: {
    fontWeight: 'bold',
    color:"#fff" ,
    fontFamily: "Lato_700Bold",
    fontSize: 25,

 
  
    
  },

  
});
