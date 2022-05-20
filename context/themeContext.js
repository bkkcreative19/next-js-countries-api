import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
    const [isLightMode, setIsLightMode] = useState(false)
    return (
        <ThemeContext.Provider
            value={{
                isLightMode,
                setIsLightMode,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if (!context)
        throw new Error('useTheme must be used inside a `ThemeProvider`')

    return context
}