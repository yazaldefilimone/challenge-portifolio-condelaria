import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from '@/presentation/components/Header';
import { ThemeContainer } from '@/shared/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContainer>
      <Header />
    </ThemeContainer>
  </React.StrictMode>,
);
