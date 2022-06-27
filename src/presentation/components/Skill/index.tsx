import React, { FunctionComponent } from 'react';

import './styles.scss';

type SkillProps = {
  name: string;
  level: string;
};
export const Skill: FunctionComponent<SkillProps> = ({ name, level }) => {
  return (
    <div className="skills__data">
      <i className="ri-checkbox-circle-line"></i>

      <div>
        <h3 className="skills__name">{name}</h3>
        <span className="skills__level">{level}</span>
      </div>
    </div>
  );
};
