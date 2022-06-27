import { FunctionComponent, useState } from 'react';
import { ReactNode } from 'react';
import { Skills } from '@/presentation/components/Skills';
import { Project } from '@/presentation/components/Project';
import './styles.scss';

interface HeroProps {}

export const Hero: FunctionComponent<HeroProps> = ({}) => {
  const [page, SetPage] = useState(true);

  function handlerChangePage(param: boolean) {
    SetPage(param);
  }
  return (
    <section className="filters container">
      <ul className="filters__content">
        <button
          className={page ? 'filters__button filter-tab-active' : 'filters__button'}
          onClick={() => handlerChangePage(true)}
        >
          Projects
        </button>
        <button
          className={!page ? 'filters__button filter-tab-active' : 'filters__button'}
          onClick={() => handlerChangePage(false)}
        >
          Skills
        </button>
      </ul>

      <div className="filters__sections">{page ? <Project /> : <Skills />}</div>
    </section>
  );
};
