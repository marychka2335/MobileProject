import { Text, View } from "react-native";
import { registerRootComponent } from 'expo';

import App from '../App';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
registerRootComponent(App);