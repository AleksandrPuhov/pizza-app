import PizzaLogo from '../../assets/images/pizza-logo.png';

type logoProps = {
    logoSmall?: boolean;
};

const Logo = ({ logoSmall = false }: logoProps) => {
    return (
        <a className="Logo" href="/">
            <img className="Logo__img" src={PizzaLogo} alt="Pizza Hot" />
            {logoSmall ? null : <h2 className="Logo__text">Pizza Hot</h2>}
        </a>
    );
};
export default Logo;
