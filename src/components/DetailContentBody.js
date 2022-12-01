import React from 'react';

function DetailContentBody({ title, description }) {
    return (
        <div className='detail-content__body'>
            <h1 className='detail-content__body-title'>{title}</h1>
            <p className='detail-content__body-overview'>{description}</p>
        </div>
    );
}

export default DetailContentBody;
