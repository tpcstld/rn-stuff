import * as React from "react";
import { Button, Text, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

function useGesture() {
  return React.useMemo(() => {
    return Gesture.Pan();
  }, []);
}

export default function HomeScreen() {
  const gesture = useGesture();

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={gesture}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>This is some selectable text.</Text>
          <Button title="And this is a button" />
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
