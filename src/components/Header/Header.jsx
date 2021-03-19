import sMod from './Header.module.css';
import Bucket from '../common/Bucket';

function Header({ bucket, handleBacketShow }) {
    return (
        <header className="header">
            <div className="container">
                <div className={sMod.header__container}>
                    <div className="logo">
                        <h3>Serching Films</h3>
                    </div>
                    <div className="header__nav">
                        <Bucket
                            handleBacketShow={handleBacketShow}
                            bucket={bucket}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
