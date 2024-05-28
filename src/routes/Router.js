// Router.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routers from './index'
function Router() {
  return (
    <Routes>
      {routers.map((router, index) => (
        <Route key={index} path={router.path} element={router.element} />
      ))}
    </Routes>
  );
}

export default Router;
