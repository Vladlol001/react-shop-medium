import { useEffect, useContext } from 'react';
import { ShopContext } from '../../context';

function Alert() {
    const { alertName, closeAlert } = useContext(ShopContext);
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, [alertName]);

    return (
        <div className="alert__container">
            <div className="alert">{alertName} add in the bucket</div>
        </div>
    );
}

export default Alert;
