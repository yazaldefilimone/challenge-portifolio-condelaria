import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '@/presentation/page/Home';

export const Routers: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
