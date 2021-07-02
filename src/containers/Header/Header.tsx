import Wrapper from '../Wrapper/Wrapper';
import Logo from '../../components/Logo/Logo';

const Header = () => {
    return (
        <header className="Header">
            <Wrapper>
                <div className="Header-top">
                    <div className="Header-top-info">
                        <Logo />
                        <h2 className="Header-top-info__text">Pizza HOT</h2>
                    </div>
                    <div>person</div>
                </div>
                <div className="Header-bottom">
                    <nav>nav</nav>
                    <div>cart</div>
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;
