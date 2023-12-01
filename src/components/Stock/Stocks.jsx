import React from 'react'
import data from './../../utils/dataStock.json'
import Stock from './Stock';
import styles from './Stocks.module.scss'

const Stocks = () => {
  return (
    <section className={styles.stocks}>
      <h1 className={styles.title}>Акции и скидки</h1>
      {data.map((obj)=> <Stock {...obj}/>)}
    </section>
  )
}

export default Stocks