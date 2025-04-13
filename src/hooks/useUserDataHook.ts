import { useEffect, useState } from "react";

const apiCall = () => 
    new Promise((resolve) => 
        setTimeout(() => resolve({ name: 'Jesús', age: 20, role: 'admin'}), 1000)
    );

// Define una función de tipo guard para validar la estructura de los datos del usuario
// Esta función verifica si el objeto tiene las propiedades esperadas y si son del tipo correcto
const isValidUser = (data: any): data is { name: string; age: number; role: string } => {
    return(
        data &&
        typeof data.name === 'string' &&
        typeof data.age === 'number' &&
        typeof data.role === 'string'
    );
};

/// Hook que maneja la lógica de usuario
/// y la carga de datos desde la API o localStorage
export function useUserData() {
    const [user, setUser] = useState(() => {
        try{
            // Intenta obtener el usuario del localStorage
            // y parsear el JSON almacenado
            const storedUser = localStorage.getItem('user');
            if(storedUser) {
                const parsed = JSON.parse(storedUser);
                return isValidUser(parsed) ? parsed : null;
            }
        } catch (error) {
            // Si hay un error al parsear, devuelve null
            // y muestra un mensaje de error en la consola
            console.error("Error parsing user data from localStorage", error);
        }
        return null;
    });

    useEffect(() => {
        // Si no hay usuario en el estado, llama a la API para obtener los datos del usuario
        // y actualiza el estado con los datos obtenidos
        if(!user) {
            apiCall().then((data) => {
                if(isValidUser(data)) {
                    setUser(data);
                }
            })
        }
    }, []);

    return [user, setUser] as const;
}