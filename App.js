import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { styles } from "./style";

import { NavigationContainer } from "@react-navigation/native";
import { HomeComponent } from "./home";
import { Details } from "./components/home2";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <ProdProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: "#694fad" }}
            initialRouteName="Jumia home" screenOptions={{
             headerTitleStyle:{color:'orange'},
              headerStyle: { backgroundColor: '#4a4a4a',  },
            }} SearchBar>
            <Stack.Screen name="Jumia home" component={HomeComponent} />
            <Stack.Screen name="details" component={Details} styles={styles.sec}  SearchBar/>
            
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </ProdProvider>
  );
}
