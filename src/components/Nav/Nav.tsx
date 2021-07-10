type navRefProps = {
    text: string;
    link: string;
};

const Nav = () => {
    const navRefs: navRefProps[] = [
        { text: 'Pizza', link: '/' },
        { text: 'Delivery Area', link: '/' },
        { text: 'Contact Us', link: '/' },
        { text: 'About Us', link: '/' },
    ];

    const navList = navRefs.map(({ text, link }: navRefProps, i) => {
        return (
            <li className="Nav-list__item" key={i}>
                <a href={link} className="Nav-ref">
                    {text}
                </a>
            </li>
        );
    });

    return (
        <nav className="Nav">
            <ul className="Nav-list">{navList}</ul>
        </nav>
    );
};

export default Nav;
