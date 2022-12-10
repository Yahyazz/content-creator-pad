import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

export default function DeleteButton({ id, deleteArticle }) {
  return (
    <button className="btn-warning w-full" onClick={() => deleteArticle(id)} >
      <MdDeleteForever className="my-auto" />
      Delete Content
    </button>
  );
}
