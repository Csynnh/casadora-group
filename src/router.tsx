import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ExhibitionPage = lazy(() => import('./pages/ExhibitionPage'));

// Loading fallback
const LoadingFallback = () => <div className="flex items-center justify-center h-screen">Loading...</div>;

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'services/:serviceName',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: 'projects/:projectName',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ProjectsPage />
          </Suspense>
        ),
      },
      {
        path: 'exhibition/:exhibitionName',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ExhibitionPage />
          </Suspense>
        ),
      }
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;