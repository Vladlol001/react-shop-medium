import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../../config';
import { ShopContext } from '../../context';
import Preloader from '../common/Preloader';
import GoodList from './GoodsList/GoodsList';

function Main() {
    const { loading, setBucket } = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setBucket(data.shop);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <main className="main">
            {loading ? (
                <Preloader />
            ) : (
                <div className="main">
                    <div className="container">
                        <GoodList />
                    </div>
                </div>
            )}
        </main>
    );
}

export default Main;
