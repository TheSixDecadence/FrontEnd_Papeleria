
import './UserMenu.css';
import userAvatar from '../assets/user.png';
import { useDropdown } from '../hooks/userMenuHooks';

const UserMenu = () => {
    const { open, toggle, ref } = useDropdown();

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
                <p className="dropdown-name">Username</p>
                <a href="/profile" className="dropdown-link">Mi perfil</a>
                <a href="/settings" className="dropdown-link">Configuraciones</a>
                <button className="dropdown-link" onClick={() => {}}>Cerrar sesión</button>
            </div>
        )}
        </div>
    );
};

export default UserMenu;
