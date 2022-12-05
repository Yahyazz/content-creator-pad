import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';

export default function AddContentInput({ addContent }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }

  function bodyChangeHandler(e) {
    setBody(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    // addContent({ title, body });
    setTitle('');
    setBody('');
  }

  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto flex justify-center flex-col bg-primary_background-darkgray02 px-4 sm:px-16 py-8 shadow-md w-full h-auto lg:h-fit rounded-xl"
    >
      <label className="font-semibold block my-2 text-md" htmlFor="title">
        Title
      </label>
      <input
        className="w-full bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
        type="text"
        name="title"
        id="title"
        placeholder="Input title here"
        onChange={titleChangeHandler}
        value={title}
        required
      />
      <label className="font-semibold block my-2 text-md" htmlFor="content">
        Content
      </label>
      <textarea
        className="w-full h-48 bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
        type="textarea"
        name="content"
        id="content"
        placeholder="Add content here"
        onChange={bodyChangeHandler}
        value={body}
        spellCheck="false"
        required
      ></textarea>
      <button type="submit" className="btn-primary w-full sm:w-2/3 mx-auto mt-6">
        <GoPlus className="my-auto" />
        <p>
          Add Content <span className="hidden sm:inline"> and Publish</span>
        </p>
      </button>
    </form>
  );
}
