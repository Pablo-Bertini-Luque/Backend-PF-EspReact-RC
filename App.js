import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TabNavigation } from "./src/navigator/TabNavigation";
import { AuthProvider } from "./src/providers/AuthProvider";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
