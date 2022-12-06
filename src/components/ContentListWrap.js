import React from 'react';
import ContentListItem from './ContentListItem';

function ContentListWrap({ contents }) {
  return (
    <div className="w-full h-auto flex flex-col items-center gap-y-8">
      {contents.map((content) => (
        <ContentListItem key={content.id} {...content} />
      ))}
    </div>
  );
}

export default ContentListWrap;
