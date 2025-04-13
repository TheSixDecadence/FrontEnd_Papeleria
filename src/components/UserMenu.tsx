
import './UserMenu.css';
import userAvatar from '../assets/user.png';
import { useDropdown } from '../hooks/userMenuHooks';
import { useUserData } from '../hooks/useUserDataHook';

const UserMenu = () => {
    const { open, toggle, ref, exit } = useDropdown();
    const [user] = useUserData();

    if(!user) return <p>Cargando usuario...</p>

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
                <button className="dropdown-link" onClick={exit}>Cerrar sesión</button>
            </div>
        )}
        </div>
    );
};

export default UserMenu;
