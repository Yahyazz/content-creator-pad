import React from 'react';

function ContentListSearchBar({ keyword, keywordChange }) {
  return (
    <>
      <input
        className="w-full h-fit text-xl my-4 py-2 px-6 rounded-full bg-primary_background-darkgray01 "
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </>
  );
}

export default ContentListSearchBar;
