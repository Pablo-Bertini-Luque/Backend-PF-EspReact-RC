import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/StackNavigator/Home";
import { InfoTurn } from "../screens/StackNavigator/InfoTurn";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={Home} />
      <Stack.Screen name="InfoTurn" component={InfoTurn} />
    </Stack.Navigator>
  );
};
