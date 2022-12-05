import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

export default function DeleteButton({ id, onDelete }) {
  return (
    <button className="btn-warning w-full" onClick={() => onDelete(id)}>
      <MdDeleteForever className="my-auto" />
      Delete Content
    </button>
  );
}
