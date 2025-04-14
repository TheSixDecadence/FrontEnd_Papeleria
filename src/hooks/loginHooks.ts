import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext"; // Importa el contexto de usuario
import { toast } from "react-toastify"; // Importa la librería de notificaciones

export const useLoginHandler = () => {
    const navigate = useNavigate();
    const { login } = useUser(); // Usa la función de login del contexto
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error] = useState(""); // Para manejar errores

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Intenta iniciar sesión con los datos proporcionados
        const result = await login(email, password);
        
        // Si el login fue exitoso, redirige al dashboard
        if (result) {
            navigate("/dashboard");
        } else {
            toast.error("Error de inicio de sesión", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }); // Muestra un mensaje de error
        }
    };

    return {
        email,
        password,
        setEmail,
        setPassword,
        handleSubmit,
        error, // Pasar el error al componente para mostrarlo
    };
};
