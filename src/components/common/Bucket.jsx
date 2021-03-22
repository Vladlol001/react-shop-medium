import { useContext } from 'react';
import { ShopContext } from '../../context';

function Bucket() {
    const { bucketItems = [], handleBacketShow } = useContext(ShopContext);
    return (
        <div onClick={handleBacketShow} className="bucket">
            <span className="bucket__items">{bucketItems.length}</span>
            <i className="fab fa-shopify"></i>
        </div>
    );
}

export default Bucket;
