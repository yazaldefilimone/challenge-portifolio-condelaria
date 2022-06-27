import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/shared/scss/styles.scss';
import { Routers } from '@/main/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
);
