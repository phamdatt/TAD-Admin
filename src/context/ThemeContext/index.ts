import React from "react";

interface ColorSchemeContextInterface {
  toggleMode: () => void;
}

export const ColorSchemeContext = React.createContext(
  {} as ColorSchemeContextInterface
);
