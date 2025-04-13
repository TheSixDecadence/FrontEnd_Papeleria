import Navbar from '../components/navbar';
import Card from '../components/Card';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const today = new Date().toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-content">
                <h1 className="dashboard-title">Dashboard</h1>
                <p className="dashboard-subtitle">Bienvenido de vuelta!</p>
                <p className="dashboard-date">Hoy es {today}</p>
            </div>
            <div className="dashboard-cards">
                <Card title="Ventas" content="$12,345 este mes" />
                <Card title="Visitas" content="567 hoy" />
                <Card title="Bounce Rate" content="42%" />
            </div>
        </div>
    );
};

export default Dashboard;
