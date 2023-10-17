import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import CustomModal from "./components/CustomModal";
import Touchables from "./components/Touchables";
import { ClickOutsideProvider } from "./hooks/useClickOutside/Provider";
import NewModuleButton from "./components/NewModuleButton";

function App(): JSX.Element {
  return (
    <ClickOutsideProvider>
      <SafeAreaView style={styles.container}>
        <CustomModal />
        {/* <Touchables /> */}
        <NewModuleButton />
      </SafeAreaView>
    </ClickOutsideProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderColor: "red",
    opacity: 0.6,
    flex: 1,
  },
});

export default App;
