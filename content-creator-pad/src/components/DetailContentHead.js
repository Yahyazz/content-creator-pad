import React from 'react';
import { showFormattedDate } from '../utils/data';

function DetailContentHead({ duration, createdAt }) {
  return (
    <div className="w-full">
      <p className="font-bold text-base mb-4">Author</p>
      <div className="flex justify-between sm:justify-start gap-x-4">
        <p className="w-fit text-sm font-light">{showFormattedDate(createdAt)}</p>
        <p className="w-fit text-sm font-light">{duration} min to read</p>
      </div>
    </div>
  );
}

export default DetailContentHead;
