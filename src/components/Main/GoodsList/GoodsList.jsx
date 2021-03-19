import GoodsItem from './GoodsItem/GoodsItem';

function GoodList({ goods = [], addToBucket, bucket }) {
    if (!goods.length) {
        return (
            <div className="not__found">
                <span>Don't have goods with such name</span>
            </div>
        );
    }
    return (
        <div className="main__container">
            {goods.map((good) => (
                <GoodsItem
                    key={good.mainId}
                    goods={good}
                    addToBucket={addToBucket}
                    bucket={bucket}
                />
            ))}
        </div>
    );
}

export default GoodList;
