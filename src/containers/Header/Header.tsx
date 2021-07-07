import Wrapper from '../Wrapper/Wrapper';
import Logo from '../../components/Logo/Logo';
import Person from '../../components/Person/Person';

const Header = () => {
    return (
        <header className="Header">
            <Wrapper>
                <div className="Header-top">
                    <Logo />

                    <Person />
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
