import React from 'react';
import { Link } from 'react-router-dom';

function ContentListItem({ id, title, description, duration }) {
  return (
    <div className="flex w-full h-auto min-h-[18rem] rounded-2xl overflow-hidden bg-primary_background-darkgray01">
      <div className="hidden sm:block md:w-1/5 h-auto bg-primary-blue"></div>
      <div className="w-full md:w-4/5 h-auto p-8 flex flex-col">
        <div className="flex justify-between mb-4">
          <h3 className="text-2xl font-bold truncate">
            <Link to={`/articles/${id}`}>{title}</Link>
          </h3>
          <p className="text-primary-blue font-light text-right hidden sm:block">
            {duration} min read
          </p>
        </div>
        <p className="content-list__item-overview">{description}</p>
      </div>
    </div>
  );
}

export default ContentListItem;

