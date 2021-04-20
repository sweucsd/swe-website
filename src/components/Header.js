import './Header.css';
import Cover from '../assets/cover.jpg';

function Header() {
    return (
        <div className="overlay">
            <img className="image" src={Cover} alt=''/>
            <div className="text">
                <h1 className="title">SWE @ UCSD</h1>
                <h2 className="subtitle">Aspire / Advance / Achieve</h2>
            </div>
        </div>
    );
}

export default Header;