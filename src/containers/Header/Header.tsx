import { useEffect, useRef, useState } from 'react';

import Wrapper from '../Wrapper/Wrapper';
import Logo from '../../components/Logo/Logo';
import Person from '../../components/Person/Person';
import Nav from '../../components/Nav/Nav';
import Cart from '../../components/Cart/Cart';

const Header = () => {
    const [scrollY, setScrollY] = useState(0);

    const [menuFixed, setMenuFixed] = useState(false);

    const refHeaderBottom = useRef<HTMLDivElement>(null);

    const scrollEvent = () => {
        setScrollY(window.pageYOffset);

        if (refHeaderBottom.current !== null) {
            setMenuFixed(scrollY >= refHeaderBottom.current.offsetTop);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);
        return () => {
            window.removeEventListener('scroll', scrollEvent);
        };
    });

    const classNameCalc =
        'Header-bottom__inner' + (menuFixed ? ' Header--fixed' : '');

    return (
        <header className="Header">
            <div className="Header-top">
                <Wrapper>
                    <div className="Header-top__inner">
                        <Logo />
                        <Person />
                    </div>
                </Wrapper>
            </div>
            <div className="Header-bottom" ref={refHeaderBottom}>
                <div className={classNameCalc}>
                    <Wrapper>
                        <div className="Header-navbar">
                            <Nav />
                            <Cart />
                        </div>
                    </Wrapper>
                </div>
            </div>
        </header>
    );
};

export default Header;
