import data from './../../utils/dataProduct.json';
import Product from './../Products/Product';
import listTheaters from './../../utils/listTheaters.json';

import styles from './../../style/Products.module.scss';
import { useState } from 'react';

const Products = () => {
  const [active, setActive] = useState(false);
  const [theaters, setTheaters] = useState('Выберите театр');

  const addActive = () => {
    setActive(!active);
  };

  const addTheater = (title) => {
    setTheaters(title);
    setActive(!active);
  };

  const addUp = () => {
    window.scroll(0, 0);
  };
  return (
    <div className={styles.products}>
      <div className={styles.wrapper}>
        <p className={styles.text}>D-BOX VIP 3D 2D</p>
        <h1 className={styles.title}>Movies 4 Noobies</h1>
        <p className={styles.subtitle}>ул. 9-го Мая, д. 77, ТРЦ «Планета», 2 этаж</p>
      </div>
      <div className={styles.products}>
        {data.map((obj) => (
          <Product addUp={addUp} key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Products;
