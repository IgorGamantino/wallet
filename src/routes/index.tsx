/* eslint-disable import/no-unresolved */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AnimationCard } from "@screens/AnimationCard";
import { CardRegistration } from "@screens/CardRegistration";
import { CardSaveSuccess } from "@screens/CardSaveSuccess";
import { Home } from "@screens/Home";
import { MyCard } from "@screens/MyCard";
const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CardRegistration"
          component={CardRegistration}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CardSaveSuccess"
          component={CardSaveSuccess}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="MyCart"
          component={MyCard}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="AnimationCard"
          component={AnimationCard}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
