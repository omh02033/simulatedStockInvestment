import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';
import { ROUTES } from './constants';
import { globalCss } from '#/stitches.config';

import 'react-toastify/dist/ReactToastify.min.css';
import './animated.css';

import {
  Main,
} from '@/pages';

globalCss({
  '@import': [
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css',
  ],
  ':root': {
    fontSize: '6px',
    '--toastify-font-family': 'Pretendard',
  },
  body: {
    fontSize: '4rem',
    fontFamily: 'Pretendard',
    margin: '0px',
    overflow: 'hidden',
  },
  button: {
    fontFamily: 'Pretendard',
  },
  '*': {
    wordBreak: 'keep-all',
    userSelect: 'none',
  },
  '#root': {
    width: '100vw',
    height: '100vh',
  }
})();

const pages: Record<ROUTES, FunctionComponent> = {
  [ROUTES.ROOT]: Main,
}

const Router = () => {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} timeout={300} classNames="fade">
        <Routes location={location}>
          {Object.entries(pages).map(([route, Component]) => (
            <Route key={route} path={route} element={<Component />} />
          ))}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
