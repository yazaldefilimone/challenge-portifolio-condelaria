import { Link } from 'phosphor-react';
import { FunctionComponent, ReactNode } from 'react';
import { Card } from '../Card';

import project1 from '@/shared/assets/image/project1.jpg';
import project2 from '@/shared/assets/image/project2.jpg';
import project3 from '@/shared/assets/image/project3.jpg';
import project4 from '@/shared/assets/image/project4.jpg';
import project5 from '@/shared/assets/image/project5.jpg';

interface ProjectProps {}

export const Project: FunctionComponent<ProjectProps> = () => {
  const projects = [
    {
      name: 'Portfolio website',
      banner: project1,
      tag: 'Web',
      url: '#',
    },
    {
      name: 'Fast food app',
      banner: project3,
      tag: 'Movil',
      url: '#',
    },
    {
      name: 'Travel app',
      banner: project4,
      tag: 'Movil',
      url: '#',
    },
    {
      name: 'Music app design',
      banner: project5,
      tag: 'Design',
      url: '#',
    },
  ];
  return (
    <div className="projects__content grid">
      {projects.map((pj, key) => (
        <Card key={key} name={pj.name} banner={pj.banner} tag={pj.tag} url={pj.url} />
      ))}
    </div>
  );
};
