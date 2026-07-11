import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import Pitch from './components/Pitch/Pitch';
import Scoreboard from './components/Nav/Scoreboard';
import CustomCursor from './components/shared/CustomCursor';
import BackgroundAnimation from './components/shared/BackgroundAnimation';

// Lazy load overlays
const Manager = React.lazy(() => import('./components/Sections/Manager'));
const Squad = React.lazy(() => import('./components/Sections/Squad'));
const History = React.lazy(() => import('./components/Sections/History'));
const Contact = React.lazy(() => import('./components/Sections/Contact'));
const SplitView = React.lazy(() => import('./components/SplitView/SplitView'));

const RootLayout = () => {
  const location = useLocation();

  // The pitch is always rendered in the background. 
  // Overlays sit on top.
  return (
    <div className="relative w-full h-screen overflow-hidden bg-board-dark">
      <BackgroundAnimation />
      <CustomCursor />
      
      {/* Top Navigation */}
      <Scoreboard />
      
      {/* Main Pitch Layer */}
      <div className="absolute inset-0 pt-20 pb-4 md:pb-10 flex items-center justify-center">
        <Pitch />
      </div>

      {/* Overlay Layer for Route Matches */}
      <Suspense fallback={<div className="absolute inset-0 z-50 flex items-center justify-center text-electric-lime font-bebas text-2xl">LOADING...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'project/:id',
        element: <SplitView />
      },
      {
        path: 'about',
        element: <Manager />
      },
      {
        path: 'skills',
        element: <Squad />
      },
      {
        path: 'timeline',
        element: <History />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
