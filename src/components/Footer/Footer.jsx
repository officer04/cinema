import { Link } from 'react-router-dom';

import vk from './../../images/vk.svg';
import telegram from './../../images/telega.svg';
import youtube from './../../images/youtube.svg';

import { ROUTES } from './../../utils/routes';

import styles from './../../style/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to={ROUTES.HOME} className={styles.logo}>
        Movies 4 Noobies
      </Link>

      <nav className={styles.navCentr}>
        <ul>
          <h1>Покупателям</h1>
          <li>Корпоративным клиентам</li>
          <li>Возврат билетов</li>
          <li>Отмены, Замены, Переносы Мероприятий</li>
        </ul>

        <ul>
          <h1>Организаторам</h1>
          <li>Блоки для афиш</li>
          <li>Реклама для организаторов</li>
          <li>Сотрудничество для организаторов мероприятий</li>
        </ul>
      </nav>

      <nav className={styles.navRight}>
        <ul>
          <li>
            <img src={telegram} alt="telegram" />
          </li>
          <li>
            <img src={vk} alt="vk" />
          </li>
          <li>
            <img src={youtube} alt="youtube" />
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
