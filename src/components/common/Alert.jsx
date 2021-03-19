import React, { useEffect } from 'react';

function Alert({ name, closeAlert }) {
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, [name]);

    return (
        <div className="alert__container">
            <div className="alert">{name} add in the bucket</div>
        </div>
    );
}

export default Alert;
