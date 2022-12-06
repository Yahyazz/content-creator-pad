import React from 'react';
import DetailContentHead from '../components/DetailContentHead';
import DetailContentBody from '../components/DetailContentBody';

function ContentArticleDetail({ title, description, duration, createdAt }) {
  return (
    <div className="w-full h-auto flex flex-col gap-y-8">
      <DetailContentHead duration={duration} createdAt={createdAt} />
      <DetailContentBody title={title} description={description} />
    </div>
  );
}

export default ContentArticleDetail;
