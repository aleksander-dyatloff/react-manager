import { createContext } from "react";

interface ContextProps {
  isAltVariant: boolean
  isDarkTheme: boolean
}

const GlobalContext = createContext<ContextProps>({
  isAltVariant: false,
  isDarkTheme: false
})

export default GlobalContext