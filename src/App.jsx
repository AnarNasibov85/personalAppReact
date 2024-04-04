import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ROUTER } from './constant/router';

const Home = lazy(() => import('./pages/home/home'));
const About = lazy(() => import('./pages/about/about'));
const Articles = lazy(() => import('./pages/articles/articles'));
const ArticlesCreate = lazy(() => import('./pages/articles/create/create'));
const ArticleDetail = lazy(() => import('./pages/articles/detail/detail'));
const Notfound = lazy(() => import('./pages/notfound/notfound'));
// const FAQ = lazy(() => import('./pages/FAQ'));

const App = () => {
  return (
    <Suspense fallback={<Spinner color='teal.500' />}>
      <Routes>
        <Route
          path={ROUTER.HOME}
          element={<Home />}
        />
        <Route
          path={ROUTER.ABOUT}
          element={<About />}
        />
        <Route
          path={ROUTER.ARTICLES}
          element={<Articles />}
        />

     ÷
        <Route
          path={ROUTER.ARTICLES_CREATE}
          element={<ArticlesCreate />}
        />
        <Route
          path={ROUTER.ARTICLES + '/:id'}
          element={<ArticleDetail />}
        />
        {/* <Route
          path={ROUTER.FAQ}
          element={<FAQ />}
        /> */}
        <Route
          path='*'
          element={<Notfound />}
        />
      </Routes>
    </Suspense>
  );
};

export default App;
