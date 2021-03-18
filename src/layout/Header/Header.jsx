import sMod from './Header.module.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className={sMod.header__container}>
                    <div className="logo">
                        <h3>Serching Films</h3>
                    </div>
                    <div className="header__nav">
                        <a href="/">Login</a>
                        <a href="/">Regestration</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
