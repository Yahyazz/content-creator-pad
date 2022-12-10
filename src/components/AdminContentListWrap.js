import React from 'react';
import AdminContentListItem from './AdminContentListItem';

function AdminContentListWrap({ contents, deleteArticle }) {
  return (
    <div className="w-full h-auto flex flex-col items-center gap-y-8">
      {contents.map((content) => (
        <AdminContentListItem key={content.id} {...content} deleteArticle={deleteArticle} />
      ))}
    </div>
  );
}

export default AdminContentListWrap;
