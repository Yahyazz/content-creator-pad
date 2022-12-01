import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContentList from '../pages/ContentList';
import DetailContent from '../pages/DetailPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<ContentList />} />
                <Route path='/articles/:id' element={<DetailContent />} />
            </Routes>
        </div>
    );
}

export default App;
