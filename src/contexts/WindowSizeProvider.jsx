import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const windowSizeContext = createContext();

const WindowSizeProvider = ({ children }) => {
  const isPC = useMediaQuery({ minWidth: 992 });

  return (
    <windowSizeContext.Provider value={isPC}>
      {children}
    </windowSizeContext.Provider>
  );
};

export const useWindowSize = () => {
  const data = useContext(windowSizeContext);
  if (data === undefined) {
    throw new Error(
      "The useWindowSize hook was used outside the WindowSizeProvider"
    );
  }
  return data;
};

export default WindowSizeProvider;
