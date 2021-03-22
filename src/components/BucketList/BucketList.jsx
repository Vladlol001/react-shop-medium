import { useContext } from 'react';
import { ShopContext } from '../../context';
import BucketItem from './BucketItem/BucketItem';

function BucketList() {
    const { bucketItems = [], handleBacketShow } = useContext(ShopContext);
    const totalPrice = bucketItems.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <div className="bucket__window">
            <div className="bucket__container">
                <ul className="bucket__list">
                    <div className="close__bucket" onClick={handleBacketShow}>
                        <i className="fas fa-times"></i>
                    </div>
                    <li className="bucket__name">Bucket</li>
                    {bucketItems.length ? (
                        bucketItems.map((item) => (
                            <BucketItem key={item.id} {...item} />
                        ))
                    ) : (
                        <li className="bucket__item">
                            <span>Bucket is empty</span>
                        </li>
                    )}
                    <li className="bucket__price">
                        <span>Total price:</span>
                        <span>{totalPrice} $</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BucketList;
