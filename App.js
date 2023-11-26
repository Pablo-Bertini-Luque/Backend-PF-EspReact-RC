import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TabNavigation } from "./src/navigator/TabNavigation";
import { AuthProvider } from "./src/providers/AuthProvider";
import { TurnsProvider } from "./src/providers/TurnsProvider";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <TurnsProvider>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </TurnsProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
