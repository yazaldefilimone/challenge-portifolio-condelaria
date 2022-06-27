import React, { FunctionComponent } from 'react';

import './styles.scss';
interface CardProps {
  name: string;
  banner: string;
  tag: string;
  url: string;
}

export const Card: FunctionComponent<CardProps> = ({ name, banner, tag, url }) => {
  return (
    <article className="projects__card">
      <img src={banner} alt="" className="projects__img" />

      <div className="projects__modal">
        <div>
          <span className="projects__subtitle">{tag}</span>
          <h3 className="projects__title">{name}</h3>
          <a href={url} className="projects__button button button__small">
            <i className="ri-link"></i>
          </a>
        </div>
      </div>
    </article>
  );
};
