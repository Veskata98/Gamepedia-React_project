import { Link } from 'react-router-dom';

export const PlatformTemplate = ({ platform }) => {
    return (
        <div className="platform-card">
            <Link to={`/platforms/${platform._id}`}>
                <img src={platform.imageBackground} loading="lazy" alt="platform-img" className="platform-img" />
                <span className="platform-title">{platform.name}</span>
            </Link>
        </div>
    );
};
