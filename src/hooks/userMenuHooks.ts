import { useState, useEffect, useRef } from 'react';

export const useDropdown = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const toggle = () => setOpen(!open);
    const close = () => setOpen(false);

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



    return { open, toggle, close, ref,  };
};
