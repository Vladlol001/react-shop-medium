import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import BucketList from './components/BucketList/BucketList';
import Alert from './components/common/Alert';

export default function App() {
    const [bucket, setBucket] = useState([]);
    const [isBacketShow, setBacketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const closeAlert = () => {
        setAlertName('');
    };

    const handleBacketShow = () => {
        setBacketShow(!isBacketShow);
    };

    const addQuantity = (id) => {
        let newState = bucket.find((item) => item.id === id);
        if (newState) {
            newState = {
                id: newState.id,
                name: newState.name,
                price: newState.price,
                quantity: newState.quantity + 1,
                isInTheBucket: newState.isInTheBucket,
            };
            setBucket(() => {
                let changeState = bucket.map((item) => {
                    if (item.id === newState.id) return (item = newState);
                    return item;
                });
                return changeState;
            });
        }
    };

    const removeQuantity = (id) => {
        let newState = bucket.find((item) => item.id === id);
        if (newState && newState.quantity > 1) {
            newState = {
                id: newState.id,
                name: newState.name,
                price: newState.price,
                quantity: newState.quantity - 1,
            };
            setBucket(() => {
                let changeState = bucket.map((item) => {
                    if (item.id === newState.id) return (item = newState);
                    return item;
                });
                return changeState;
            });
        }
    };

    const removeFromBucket = (id) => {
        setBucket(() => {
            let newState = bucket.filter((item) => item.id !== id);
            setBucket(newState);
        });
    };

    const addToBucket = (item) => {
        const itemIndex = bucket.findIndex(
            (bucketItem) => bucketItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setBucket([...bucket, newItem]);
            setAlertName(item.name);
        } else {
            handleBacketShow();
        }
    };

    return (
        <>
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
            {isBacketShow && (
                <BucketList
                    bucket={bucket}
                    handleBacketShow={handleBacketShow}
                    removeFromBucket={removeFromBucket}
                    addQuantity={addQuantity}
                    removeQuantity={removeQuantity}
                />
            )}
            <Header bucket={bucket} handleBacketShow={handleBacketShow} />
            <Main bucket={bucket} addToBucket={addToBucket} />
            <Footer />
        </>
    );
}
