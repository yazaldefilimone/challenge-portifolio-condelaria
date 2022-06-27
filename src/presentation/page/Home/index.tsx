import { Footer } from '@/presentation/components/Footer';
import Header from '@/presentation/components/Header';
import { Hero } from '@/presentation/components/Hero';
import React, { FunctionComponent } from 'react';

import { HomeContainer } from './styles';

export const Home: FunctionComponent = () => {
  return (
    <HomeContainer>
      <Header />
      <Hero />
      <Footer />
    </HomeContainer>
  );
};
