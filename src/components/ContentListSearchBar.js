import React from 'react';

function ContentListSearchBar({ keyword, keywordChange }) {
    return (
        <div>
            <input 
                className='content-list__search-bar'
                type='text'
                placeholder='Search...'
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}
            />
        </div>
    );
}

export default ContentListSearchBar;
