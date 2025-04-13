import './Card.css';

interface Props {
    title: string;
    content: string;
}

const Card = ({ title, content }: Props) => {
    return (
        <div className="dashboard-card">
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{content}</p>
        </div>
    );
};

export default Card;
