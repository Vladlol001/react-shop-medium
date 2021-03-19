import preloader from '../../image/preloader.svg';

function Preloader() {
    return (
        <div className="preloader">
            <img src={preloader} alt="Preloader" />
        </div>
    );
}

export default Preloader;
