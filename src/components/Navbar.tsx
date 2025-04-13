import './Navbar.css';
import UserMenu from './UserMenu';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="navbar-title">Pape</h1>
            <div className="navbar-links">
                <a href="/dashboard" className="navbar-link">Pagina Principal</a>
                <a href="/products" className="navbar-link">Productos</a>
                <a href="/providers" className="navbar-link">Proveedores</a>
                <a href="/debtors" className="navbar-link">Deudores</a>
            </div>
            <div className="navbar-user">
                <UserMenu /> 
            </div>
        </div>
    );
};

export default Navbar;
