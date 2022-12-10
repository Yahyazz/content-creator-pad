import React from 'react';
import DetailContentHead from '../components/DetailContentHead';
import DetailContentBody from '../components/DetailContentBody';

function ContentArticleDetail({ author, title, description, duration, createdAt }) {
  return (
    <div className="w-full h-auto flex flex-col gap-y-8">
      <DetailContentHead author={author} duration={duration} createdAt={createdAt} />
      <DetailContentBody title={title} description={description} />
    </div>
  );
}

export default ContentArticleDetail;
