import { FunctionComponent, ReactNode } from 'react';

import { ProjectContainer } from './styles';

interface ProjectProps {
  name: string;
}

export const Project: FunctionComponent<ProjectProps> = ({ name }) => {
  return (
    <ProjectContainer>
      <h1>Project</h1>
      {name}
    </ProjectContainer>
  );
};
