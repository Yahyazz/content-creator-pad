import { Editor } from 'react-draft-wysiwyg';
import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import useInput from '../hooks/useInput';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';

export default function AddContentInput({ addArticle }) {
  const [newTitle, titleChangeHandler] = useInput('');
  const [newAuthor, authorChangeHandler] = useInput('');
  const [newDescription, setNewDescription] = useState('');
  const [newDuration, durationChangeHandler] = useInput(0);

  function descriptionChangeHandler(body) {
    setNewDescription(body);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const description = draftToHtml(convertToRaw(newDescription.getCurrentContent()));
    addArticle({ newTitle, newAuthor, description, newDuration });
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
      <label className="font-semibold block my-2 text-md">Content</label>
      <Editor
        editorState={newDescription}
        toolbarClassName="toolbarClassName text-black"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName w-full min-h-[12rem] bg-primary_background-darkgray01 px-4 py-2 rounded-md"
        onEditorStateChange={descriptionChangeHandler}
      />
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
