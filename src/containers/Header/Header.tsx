import Wrapper from '../Wrapper/Wrapper';
import Logo from '../../components/Logo/Logo';
import Person from '../../components/Person/Person';
import Nav from '../../components/Nav/Nav';
import Cart from '../../components/Cart/Cart';

const Header = () => {
    return (
        <header className="Header">
            <Wrapper>
                <div className="Header-top">
                    <Logo />
                    <Person />
                </div>
                <div className="Header-bottom">
                    <Nav />
                    <Cart />
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;
