import React from 'react';
import AdminContentListItem from './AdminContentListItem';

function AdminContentListWrap({ contents, onDelete }) {
  return (
    <div className="w-full h-auto flex flex-col items-center gap-y-8">
      {contents.map((content) => (
        <AdminContentListItem key={content.id} onDelete={onDelete} {...content} />
      ))}
    </div>
  );
}

export default AdminContentListWrap;
