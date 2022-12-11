import HTMLReactParser from 'html-react-parser';
import React from 'react';

function DetailContentBody({ title, description }) {
  return (
    <div className="w-full">
      <h1 className="font-bold text-3xl text-center sm:text-left mb-4">{title}</h1>
      <div className="text-lg font-montserrat">{HTMLReactParser(description)}</div>
    </div>
  );
}

export default DetailContentBody;
