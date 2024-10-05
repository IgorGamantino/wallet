import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReactNode } from "react";
import { Home } from "../screens/Home";
const Stack = createNativeStackNavigator();

interface RoutesProps  {
  children: ReactNode
}

export function Routes(){
return (
  <>


  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{
      headerShown: false
    }}/>

  </Stack.Navigator>
</NavigationContainer>
</>
)
}
