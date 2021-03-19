import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../config';
import Preloader from '../common/Preloader';
import GoodList from './GoodsList/GoodsList';

function Main({ addToBucket, bucket }) {
    const [goods, setGoods] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data && setGoods(data.shop);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <main className="main">
            {isLoading ? (
                <Preloader />
            ) : (
                <div className="main">
                    <div className="container">
                        <GoodList
                            bucket={bucket}
                            goods={goods}
                            addToBucket={addToBucket}
                        />
                    </div>
                </div>
            )}
        </main>
    );
}

export default Main;
