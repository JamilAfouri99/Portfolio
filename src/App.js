import './App.css';
import React, { lazy, Suspense } from 'react'
import { Route, Navigate, Routes } from 'react-router-dom';
const Portfolio = lazy(() => import('./component/Portfolio'))
const Contact = lazy(() => import('./component/Contact me/Contact'))
const Projects = lazy(() => import('./component/Projects/Projects'))


function App() {
  return (
    <div className="App">
      <Suspense fallback={
        <div className={'spinner'}>
          <div className='spinner-border' role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>}>
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
