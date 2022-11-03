import { createContext } from "react";

interface ContextProps {
  isAltVariant: boolean
  isDarkTheme: boolean
  setDarkTheme: (value: boolean) => void
}

const GlobalContext = createContext<ContextProps>({
  isAltVariant: false,
  isDarkTheme: false,
  setDarkTheme: () => {},
})

export default GlobalContext