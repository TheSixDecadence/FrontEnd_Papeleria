import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const useDropdown = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const toggle = () => setOpen(!open);
    const close = () => setOpen(false);

    //Función para cerrar el dropdown y navegar a la página de inicio
    // al hacer click en "Cerrar sesión"
    const exit = () => {
        setOpen(false);
        
        navigate('/', { replace: true });
    }

    //useEffect usado para cerrar el dropdown al hacer click fuera de él
    // y para cerrar el dropdown al hacer click en un enlace dentro de él
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            close();
        }
        };

        // Agregar el evento de clic al documento
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    

    return { open, toggle, close, ref, exit };
};
