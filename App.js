import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation/Navigation";
import { TemaProvider } from "./context/TemaContext";

const App = () => {
  return (
    <TemaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </TemaProvider>
  );
};

export default App;