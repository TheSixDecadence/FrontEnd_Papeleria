import { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";  // Asegúrate de tener el hook useAuth

// Creamos el contexto que usará la información de autenticación
const UserContext = createContext<ReturnType<typeof useAuth> | undefined>(undefined);

// Componente UserProvider que provee el contexto
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const auth = useAuth();  // Llamamos al hook useAuth para gestionar el estado del usuario
    return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};

// Hook personalizado para acceder al contexto de usuario
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
