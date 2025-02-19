import * as React from "react";
import { Button, Text, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { runOnJS, useSharedValue } from "react-native-reanimated";

export default function HomeScreen() {
  const activationNumber = useSharedValue(0);
  const [state, setState] = React.useState("nothing");

  const gesture = React.useMemo(() => {
    return Gesture.Pan()
      .manualActivation(true)
      .onTouchesDown((e, manager) => {
        if (activationNumber.get() % 2 === 0) {
          runOnJS(setState)("active");
          manager.activate();
        } else {
          runOnJS(setState)("not active");
          // manager.fail();
        }

        activationNumber.set(activationNumber.get() + 1);
      })
      .onTouchesMove((e, manager) => {
        console.log("htht - move");
        manager.fail();
      })
      .onTouchesUp((e, manager) => {
        manager.end();
      })
      .onFinalize(() => {
        // runOnJS(setState)("finalized");
      });
  }, [activationNumber]);

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={gesture}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>State: {state}</Text>
          <Text>This is some selectable text.</Text>
          <Button title="And this is a button" />
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
