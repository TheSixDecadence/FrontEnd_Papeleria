import './UserMenu.css';
import userAvatar from '../assets/user.png';
import { useDropdown } from '../hooks/userMenuHooks';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom'; 

const UserMenu = () => {
    const navigate = useNavigate(); 
    const { open, toggle, ref } = useDropdown();
    const { user, logout } = useUser();  // Aquí obtenemos user y logout desde el contexto

    if (!user) return <p>Cargando usuario...</p>;

    const handleLogout = () => {
        logout();  // Llamamos a la función logout proporcionada por el contexto
        navigate('/');  // Redirigimos a la página de login después de cerrar sesión
    };

    return (
        <div className="user-menu" ref={ref}>
            <img
                src={userAvatar}
                alt="User Avatar"
                className="user-avatar"
                onClick={toggle}
            />
            {open && (
                <div className="dropdown">
                    <p className="dropdown-name">{user.name}, {user.age}, {user.role}</p>
                    <a href="/profile" className="dropdown-link">Mi perfil</a>
                    <a href="/settings" className="dropdown-link">Configuraciones</a>
                    <button className="dropdown-link" onClick={handleLogout}>Cerrar sesión</button>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
