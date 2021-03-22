import { useContext } from 'react';
import { ShopContext } from '../../../../context';

function GoodsItem({ goods }) {
    const { addToBucket, bucket = [], bucketItems } = useContext(ShopContext);
    let goToTheBucket = 0;
    return (
        <div className="card">
            <div className="card__photo">
                <img
                    src={goods.granted[0].images.full_background}
                    alt={goods.granted[0].name}
                />
            </div>
            <div className="cards__description">
                <div className="card__name">{goods.granted[0].name}</div>
                <div className="card__description">
                    {goods.granted[0].description}
                </div>
            </div>
            <div className="card__price">
                <button
                    onClick={() => {
                        addToBucket({
                            id: goods.mainId,
                            name: goods.granted[0].name,
                            price: goods.price.finalPrice,
                            isInTheBucket: true,
                        });
                    }}
                    className="card__btn"
                >
                    {bucketItems.forEach((item) => {
                        if (item.id === goods.mainId) {
                            goToTheBucket = 1;
                        }
                        return item;
                    })}
                    {goToTheBucket ? (
                        <span>Go to the bucket</span>
                    ) : (
                        <span>Buy</span>
                    )}
                </button>
                <span>{goods.price.finalPrice} $</span>
            </div>
        </div>
    );
}

export default GoodsItem;
