import { useContext } from 'react';
import { ShopContext } from '../../../context';

function BucketItem({ id, name, price, quantity }) {
    const { removeFromBucket, addQuantity, removeQuantity } = useContext(
        ShopContext
    );

    return (
        <li className="bucket__item">
            <span>
                {name} x {quantity} = {price * quantity}
            </span>
            <span className="bucket__item__container">
                <button
                    className="bucket__item__minus"
                    onClick={() => removeQuantity(id)}
                >
                    -
                </button>
                <span className="bucket__item__count">{quantity}</span>
                <button
                    className="bucket__item__plus"
                    onClick={() => addQuantity(id)}
                >
                    +
                </button>
            </span>
            <span
                className="bucket__delete"
                onClick={() => removeFromBucket(id)}
            >
                <i className="fas fa-times"></i>
            </span>
        </li>
    );
}

export default BucketItem;
