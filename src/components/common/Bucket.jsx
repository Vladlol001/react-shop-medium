function Bucket({ bucket, handleBacketShow }) {
    return (
        <div onClick={handleBacketShow} className="bucket">
            <span className="bucket__items">{bucket.length}</span>
            <i className="fab fa-shopify"></i>
        </div>
    );
}

export default Bucket;
