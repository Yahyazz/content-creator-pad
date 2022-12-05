import React from 'react';
import DetailContentHead from '../components/DetailContentHead';
import DetailContentBody from '../components/DetailContentBody';

function ContentArticleDetail({ title, description, duration }) {
  return (
    <div className="detail-content">
      <DetailContentHead duration={duration} />
      <DetailContentBody title={title} description={description} />
    </div>
  );
}

export default ContentArticleDetail;
