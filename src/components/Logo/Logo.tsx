import PizzaLogo from '../../assets/images/pizza-logo.png';

const Logo: React.FC = () => {
    return (
        <a className="Logo" href="/">
            <img className="Logo__img" src={PizzaLogo} alt="Pizza Hot" />
            <h2 className="Logo__text">Pizza Hot</h2>
        </a>
    );
};
export default Logo;
