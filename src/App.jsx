import { useContext } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import BucketList from './components/BucketList/BucketList';
import Alert from './components/common/Alert';
import { ShopContext } from './context';

export default function App() {
    const { alertName, isBacketShow } = useContext(ShopContext);
    return (
        <>
            {alertName && <Alert />}
            {isBacketShow && <BucketList />}
            <Header />
            <Main />
            <Footer />
        </>
    );
}
