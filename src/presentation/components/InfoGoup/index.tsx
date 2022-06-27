import { FunctionComponent, ReactNode } from 'react';

import './styles.scss';

interface InfoGroupProps {
  children: ReactNode;
  infoNumber: string | number;
}

export const InfoGroup: FunctionComponent<InfoGroupProps> = ({ children, infoNumber }) => {
  return (
    <div className="profile__info-group">
      <h3 className="profile__info-number">{infoNumber}</h3>
      {children}
    </div>
  );
};
