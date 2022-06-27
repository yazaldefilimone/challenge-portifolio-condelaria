import { FunctionComponent, ReactNode, useEffect, useState } from 'react';

import perfil from '@/shared/assets/image/perfil.png';
import './styles.scss';
import { InfoGroup } from '@/presentation/components/InfoGoup';

import { User } from '@/domain/entities';
import { IGetUserUseCase } from '@/domain/use-cases';
import { IStorage } from '@/data/protocols/cache';

interface HeaderProps {
  children?: ReactNode;
  getUserUseCase?: IGetUserUseCase;
  storage?: IStorage;
}

export const Header: FunctionComponent<HeaderProps> = ({}) => {
  const [theme, SetTheme] = useState(false);

  // const [user, SetUser] = useState<User>();

  // async function handler() {
  //   try {
  //     const response = await getUserUseCase.perform();
  //     SetUser(response);
  //   } catch (error: any) {

  //   }
  // }
  const social = [
    {
      href: 'https://github.com/yazaldefilimonepinto',
      icon: 'ri-github-line',
    },
    {
      href: 'href="https://www.linkedin.com/in/yazalde-filimone',
      icon: 'ri-linkedin-box-line',
    },
    {
      href: 'https://twitter.com/yazaldefilimone',
      icon: 'ri-twitter-line',
    },
  ];

  const callMe = [
    {
      href: `https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!`,
      icon: 'ri-whatsapp-line',
    },
    {
      href: 'https://m.me/bedimcode',
      icon: 'ri-messenger-line',
    },
  ];
  useEffect(() => {
    const body = document.querySelector('body');
    const result = Boolean(localStorage.getItem('theme'));
    if (result) {
      body?.classList.add('dark-theme');
    } else {
      body?.classList.remove('dark-theme');
    }
  }, []);

  function handlerTheme() {
    const body = document.querySelector('body');

    if (theme) {
      body?.classList.add('dark-theme');
      SetTheme(true);
      localStorage.setItem('theme', `${theme}`);
      return;
    }

    if (!theme) {
      body?.classList.remove('dark-theme');
      SetTheme(false);
      localStorage.setItem('theme', `${theme}`);
      return;
    }
  }
  return (
    <header className="profile container">
      <i className="ri-moon-line change-theme" onClick={() => handlerTheme()}></i>

      <div className="profile__container grid">
        <div className="profile__data">
          <div className="profile__border">
            <div className="profile__perfil">
              <img src={perfil} alt="" />
            </div>
          </div>

          <h2 className="profile__name">Yazalde Filimone</h2>
          <h3 className="profile__profession">Web developer</h3>

          <ul className="profile__social">
            {social.map((data, key) => (
              <a key={key} href={data.href} target="_blank" className="profile__social-link">
                <i className={data.icon}></i>
              </a>
            ))}
          </ul>
        </div>

        <div className="profile__info grid">
          <InfoGroup infoNumber={7}>
            <p className="profile__info-description">
              Years of <br /> work
            </p>
          </InfoGroup>

          <InfoGroup infoNumber={96}>
            <p className="profile__info-description">
              Satisfied <br /> customers
            </p>
          </InfoGroup>
          <InfoGroup infoNumber={96}>
            <p className="profile__info-description">
              Satisfied <br /> customers
            </p>
          </InfoGroup>
        </div>

        <div className="profile__buttons">
          <a download="" href="assets/pdf/Gianell-Cv.pdf" className="button">
            Download CV <i className="ri-download-line"></i>
          </a>

          <div className="profile__buttons-small">
            {callMe.map((data, key) => (
              <a
                key={key}
                href={data.href}
                target="_blank"
                className="button button__small button__gray"
              >
                <i className={data.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
