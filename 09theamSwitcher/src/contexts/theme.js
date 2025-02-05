import { createContext, useContext } from "react";

export const TheamContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = TheamContext.Provider

export default function useTheme(){
    return useContext(TheamContext)
}