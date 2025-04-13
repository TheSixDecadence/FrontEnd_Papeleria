import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginHandler = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        navigate("/dashboard")
    };

    return {
        email,
        password,
        setEmail,
        setPassword,
        handleSubmit,
    };
};
