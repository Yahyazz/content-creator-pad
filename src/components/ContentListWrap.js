import React from 'react';
import ContentListItem from './ContentListItem';

function ContentListWrap({ contents }) {
  return (
    <div className="content-list__warp">
      {contents.map((content) => (
        <ContentListItem key={content.id} {...content} />
      ))}
    </div>
  );
}

export default ContentListWrap;
