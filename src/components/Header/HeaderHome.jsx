import { Link, NavLink, useLocation } from 'react-router-dom';

import account from './../../images/user.svg';
import logo from './../../images/logo.png';

import { ROUTES } from './../../utils/routes';

import styles from './../../style/Header.module.scss';

const HeaderHome = () => {
  const location = useLocation()
  return (
    <header className={styles.header}>
      <Link to={ROUTES.HOME} className={styles.logo}>
        Movies 4 Noobies
      </Link>

      <nav className={styles.nav}>
        <ul>
          <NavLink to="/" className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}>Расписание</NavLink>
          <NavLink to="/stock" className={`${styles.link} ${location.pathname === '/stock' ? styles.active : ''}`}>Акции</NavLink>
          <NavLink to="/news" className={`${styles.link} ${location.pathname === '/news' ? styles.active : ''}`}>Новости</NavLink>
        </ul>
      </nav>

      <div className={styles.account}>
        <ul>
          <Link to="/register"><li>Регистрация</li></Link>
          <Link to="/login"><li>Войти</li></Link>
        </ul>
      </div>
    </header>
  );
};

export default HeaderHome;
