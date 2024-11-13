import React from "react";
import {
  ScrollView as ScrollViewRN,
  Pressable,
  StyleSheet,
} from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

export default function RootLayout() {
  const ScrollViewComponent = false ? ScrollView : ScrollViewRN;
  return (
    <GestureHandlerRootView
      style={[StyleSheet.absoluteFill, { backgroundColor: "red" }]}
    >
      <ScrollViewComponent>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24,
        ].map((item) => (
          <Pressable
            key={item}
            style={{
              height: 100,
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,
            }}
            onPress={() => {
              console.log("pressed");
            }}
          />
        ))}
      </ScrollViewComponent>
    </GestureHandlerRootView>
  );
}
