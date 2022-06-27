import { sk } from 'date-fns/locale';
import React, { FunctionComponent } from 'react';
import { Skill } from '../Skill';

import './styles.scss';

export const Skills: FunctionComponent = () => {
  const skills = [
    {
      title: 'Frontend Developer',
      stacks: [
        {
          name: 'CSS',
          level: 'Advanced',
        },
        {
          name: 'HTML:5',
          level: 'Advanced',
        },
        {
          name: 'JavaScript',
          level: 'Advanced',
        },
        {
          name: 'JavaScript',
          level: 'Advanced',
        },
        {
          name: 'React',
          level: 'Intermediate',
        },
        {
          name: 'NextJs',
          level: 'Intermediate',
        },
        {
          name: 'Bootstrap',
          level: 'Basic',
        },
        {
          name: 'Git',
          level: 'Intermediate',
        },
      ],
    },
    {
      title: 'Backend Developer',
      stacks: [
        {
          name: 'NodeJs',
          level: 'Advanced',
        },
        {
          name: 'NestJs',
          level: 'Intermediate',
        },
        {
          name: 'Express',
          level: 'Advanced',
        },
        {
          name: 'Firebase',
          level: 'Intermediate',
        },
        {
          name: 'Prisma',
          level: 'Intermediate',
        },
        {
          name: 'TypeOrm',
          level: 'Intermediate',
        },
        {
          name: 'clean code',
          level: 'Intermediate',
        },
        {
          name: 'clean arch',
          level: 'Intermediate',
        },
      ],
    },
  ];

  return (
    <div className="skills__content grid">
      {skills.map(({ title, stacks }, key) => (
        <div className="skills__area" key={key}>
          <h3 className="skills__title">{title}</h3>

          <div className="skills__box">
            <div className="skills__group">
              {stacks.map((stack, key) => (
                <Skill key={key} name={stack.name} level={stack.level} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
