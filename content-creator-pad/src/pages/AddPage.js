import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddContentInput from '../components/AddContentInput';

export default function AddPage() {
  const navigate = useNavigate();

  function addContentHandler() {
    navigate('/admin');
  }

  return (
    <section className="container-big flex justify-center flex-col pt-4 bg-primary_background-darkgray01">
      <h2 className="text-2xl font-bold mb-5 text-center sm:text-left">Add Content</h2>
      <AddContentInput addArticle={addContentHandler} />
    </section>
  );
}
