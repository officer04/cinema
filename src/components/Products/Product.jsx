import { Link } from 'react-router-dom';

import Button from '../UI/Button';
import styles from './../../style/Product.module.scss';

const Product = ({ title, description, price, img, id, addUp, time, descriptionFull3 }) => {
  return (
    <div className={styles.product}>
      <img src={img} width={293} height={300} alt={title} />
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <h3>{title}</h3>
          <p>{descriptionFull3}</p>
          <p>{time}</p>
        </div>
        <div className={styles.text}>
          <span>{price}₽</span>
          <Link to={`/products/${id}`}>
            <Button className={styles.btn} onClick={addUp}>
              Подробнее
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
