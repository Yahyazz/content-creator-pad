import React from 'react';
import EditContentInput from '../components/EditContentInput';

export default function EditPage() {
  return (
    <section className="container-big flex justify-center flex-col pt-4 bg-primary_background-darkgray01">
      <h2 className="text-2xl font-bold mb-5 text-center sm:text-left">Edit Content</h2>
      <EditContentInput />
    </section>
  );
}
