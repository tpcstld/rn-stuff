import * as React from "react";
import { ScrollView, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

function useGesture() {
  return React.useMemo(() => {
    return (
      Gesture.Pan()
        // All of the following have no effect on the bug.
        // .enabled(false)
        // .hitSlop({ bottom: -100 })
        // .onTouchesDown((_, manager) => manager.fail())
        .manualActivation(true)
    );
  }, []);
}

export default function HomeScreen() {
  const gesture = useGesture();

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={gesture}>
        <ScrollView>
          <View
            style={{ width: "100%", height: 300, backgroundColor: "red" }}
          />
          <View
            style={{ width: "100%", height: 300, backgroundColor: "blue" }}
          />
        </ScrollView>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
