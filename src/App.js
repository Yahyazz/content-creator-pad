import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <div className="text-primary-white">
      <header className="fixed h-auto w-full py-4 transition-all z-10 top-0 left-0 bg-primary_background-darkgray02">
        <div className="container-big flex flex-col sm:flex-row gap-y-4 justify-between items-center">
          <h1 className="text-primary-blue text-4xl font-bold">CCPAD</h1>
          <Navigation />
        </div>
      </header>
      <main className="mt-32 md:mt-20 h-auto min-h-[calc(100vh-5rem)]">
        <Routes>
          <Route path="*" element={<LandingPage />} />
          <Route path="/content/add" element={<AddPage />} />
          <Route path="/content/edit" element={<EditPage />} />
        </Routes>
      </main>
      <footer className="absolute left-0 w-full h-auto py-4 transition-all bg-primary_background-darkgray02">
        <div className="container-big flex flex-col justify-center items-center min-[425px]:flex-row min-[425px]:justify-between">
          <div className="footer-item">
            <p>&copy; Copyright 2022 CCPAD</p>
          </div>
          <div className="footer-item">
            <p>
              Powered by <span className="text-primary-blue">C22-256</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
