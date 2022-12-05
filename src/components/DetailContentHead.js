import React from 'react';

function DetailContentHead({ duration }) {
  return (
    <div className="detail-content__head">
      <p className="detail-content__head-author">Author</p>
      <div className="detail-content__head-wrap">
        <p className="detail-content__head-release-date">Sep 22, 2022</p>
        <p className="detail-content__head-duration">{duration} min to read</p>
      </div>
    </div>
  );
}

export default DetailContentHead;
