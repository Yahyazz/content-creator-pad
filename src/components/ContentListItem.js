import React from 'react';
import { Link } from 'react-router-dom';

function ContentListItem({ id, title, overview, duration }) {
  return (
    <div className="content-list__item">
      <div className="content-list__item-img"></div>
      <div className="content-list__item-text">
        <h3 className="content-list__item-title">
          <Link to={`/articles/${id}`}>{title}</Link>
          <span className="content-list__item-duration">{duration} min read</span>
        </h3>
        <p className="content-list__item-overview">{overview}</p>
      </div>
    </div>
  );
}

export default ContentListItem;
