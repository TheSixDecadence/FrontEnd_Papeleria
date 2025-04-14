import { useState } from "react";
import { fetchUsers } from "../api/userApi";
import { User } from "../types/User";

export function useAuth() {
    const [user, setUser] = useState<User | null>(() => {
        const stored = localStorage.getItem("user");
        return stored ? JSON.parse(stored) : null;
    });
    const [error, setError] = useState("");

    const login = async (email: string, password: string) => {
        try {
        const users = await fetchUsers();
        const found = users.find(
            (u: any) => u.email === email && u.password === password
        );

        if (!found) {
            setError("Invalid credentials");
            return null;
        }

        const cleanedUser: User = {
            name: `${found.firstName} ${found.lastName}`,
            age: found.age,
            role: found.company?.title || "User",
        };

        localStorage.setItem("user", JSON.stringify(cleanedUser));
        setUser(cleanedUser);
        setError("");
        return cleanedUser;
        } catch (err) {
        console.error("Login error:", err);
        setError("Unexpected error");
        return null;
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return { user, login, logout, error };
}