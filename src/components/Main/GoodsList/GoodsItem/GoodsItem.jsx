function GoodsItem({ goods, addToBucket }) {
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
                        });
                    }}
                    className="card__btn"
                >
                    Buy
                </button>
                <span>{goods.price.finalPrice} $</span>
            </div>
        </div>
    );
}

export default GoodsItem;
