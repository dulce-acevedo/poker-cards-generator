import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Results from './Results';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'results',
    element: <Results />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
