import React from 'react';
import { GoPlus } from 'react-icons/go';
import useInput from '../hooks/useInput';

export default function AddContentInput({ addArticle }) {
  const [newTitle, titleChangeHandler] = useInput('');
  const [newAuthor, authorChangeHandler] = useInput('');
  const [newDescription, descriptionChangeHandler] = useInput('');
  const [newDuration, durationChangeHandler] = useInput(0);

  const submitHandler = (e) => {
    e.preventDefault();
    addArticle({ newTitle, newAuthor, newDescription, newDuration });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto flex justify-center flex-col bg-primary_background-darkgray02 px-4 sm:px-16 py-8 mb-8 shadow-md w-full h-auto lg:h-fit rounded-xl"
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
        value={newTitle}
        required
      />
      <label className="font-semibold block my-2 text-md" htmlFor="title">
        Author
      </label>
      <input
        className="w-full bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
        type="text"
        name="author"
        id="author"
        placeholder="Input author here"
        onChange={authorChangeHandler}
        value={newAuthor}
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
        onChange={descriptionChangeHandler}
        value={newDescription}
        spellCheck="false"
        required
      ></textarea>
      <label className="font-semibold block my-2 text-md" htmlFor="duration">
        Minute Read
      </label>
      <input
        className="w-full md:w-1/4 bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
        type="number"
        name="duration"
        id="duration"
        placeholder="Input read duration here"
        onChange={durationChangeHandler}
        value={newDuration}
        required
      />
      <button type="submit" className="btn-primary w-full sm:w-2/3 mx-auto mt-6">
        <GoPlus className="my-auto" />
        <p>
          Add Content <span className="hidden sm:inline"> and Publish</span>
        </p>
      </button>
    </form>
  );
}
