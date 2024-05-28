// routes.js
import React from 'react';
import Viewproduct from '../pages/ViewProduct/Viewproduct';
import Kids from '../pages/kids/Kids';
import Men from '../pages/mens/Men';
import Shop from '../pages/shop/Shop';
import Women from '../pages/women/Women';

 const routers = [
  {
    path: 'shop',
    element: <Shop />,
  },
  {
    path: 'men',
    element: <Men />,
  },
  {
    path: 'women',
    element: <Women />,
  },
  {
    path: 'kids',
    element: <Kids />,
  },
  {
    path: 'product/:id',
    element: <Viewproduct />,
  },
];

export default routers;
