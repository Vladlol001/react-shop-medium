import { useContext } from 'react';
import { ShopContext } from '../../../context';
import GoodsItem from './GoodsItem/GoodsItem';

function GoodList() {
    const { bucket = [] } = useContext(ShopContext);

    if (!bucket.length) {
        return (
            <div className="not__found">
                <span>Don't have goods with such name</span>
            </div>
        );
    }
    return (
        <div className="main__container">
            {bucket.map((good) => (
                <GoodsItem key={good.mainId} goods={good} />
            ))}
        </div>
    );
}

export default GoodList;
