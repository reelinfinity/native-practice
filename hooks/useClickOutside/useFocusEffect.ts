import React, { useCallback, useEffect } from "react";
import { AppState, AppStateStatus } from "react-native";

export const useFocusEffect = (
  activeCallback: () => void,
  inactiveCallback: () => void,
) => {
  const appState = React.useRef(AppState.currentState);
  const handleAppStateChange = useCallback(
    (nextAppState: AppStateStatus) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      )
        activeCallback();
      if (
        appState.current === "active" &&
        nextAppState.match(/inactive|background/)
      )
        inactiveCallback();
    },
    [activeCallback, inactiveCallback],
  );

  useEffect(() => {
    const listener = AppState.addEventListener("change", handleAppStateChange);
    return () => {
      listener.remove();
    };
  }, [handleAppStateChange]);
};
